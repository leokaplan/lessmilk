Game.Menu = function (game) { };

Game.Menu.prototype = {

	create: function () {
	    game.add.text(Math.floor(w/2)+0.5, 50, 'Princess Quest', { font: '40px Arial', fill: '#fff' })
			.anchor.setTo(0.5, 0.5);

	    game.add.text(Math.floor(w/2)+0.5, 100, 'help the princess go as high as possible', { font: '22px Arial', fill: '#fff' })
			.anchor.setTo(0.5, 0.5);

		if (this.game.device.desktop)
			var txt = 'press the UP arrow key to start';
		else
			var txt = 'tap anywhere to start';

	    label2 = game.add.text(Math.floor(w/2)+0.5, h-40+0.5, txt, { font: '25px Arial', fill: '#fff' });
		label2.anchor.setTo(0.5, 0.5);
		game.add.tween(label2).to({ angle:1 }, 300, Phaser.Easing.Linear.None)
    		.to({ angle:-1 }, 300, Phaser.Easing.Linear.None).loop().start();

		this.princess = this.game.add.sprite(w/2, h/2-50, 'princess');
    	this.princess.body.gravity.y = 12;
    	this.princess.anchor.setTo(0.5, 1);
    	this.princess.frame = 1;

    	this.platform = this.game.add.sprite(w/2, h/2+150, 'platform');
    	this.platform.anchor.setTo(0.5, 0.5);
    	this.platform.body.immovable = true;

		this.sound_toggle = this.game.add.button(w-70, 42, 'mute', this.toggle_sound, this);

		this.cursor = this.game.input.keyboard.createCursorKeys();
	},

	update: function() {
		game.physics.collide(this.princess, this.platform);	

		if (this.princess.body.touching.down && this.princess.scale.y == 1) {
			var tween = game.add.tween(this.princess.scale).to({ y: 0.7, x: 1.3}, 150, Phaser.Easing.Linear.None).start();
			
			tween.onComplete.add(function(){
				this.princess.scale.setTo(1, 1);
				this.princess.body.velocity.y = -500;
			}, this);
		}

		if (this.cursor.up.isDown || game.input.activePointer.isDown)
			game.state.start('Play');
	},

	toggle_sound: function() {
		if (this.sound_toggle.frame == 0) {
			this.sound_toggle.frame = 1;
			sound = false;
		}
		else {
			this.sound_toggle.frame = 0;
			sound = true;			
		}
	},

	shutdown: function() {
		game.world.removeAll();	
	}

};

