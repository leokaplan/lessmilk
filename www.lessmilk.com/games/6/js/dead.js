Game.Dead = function (game) { };

Game.Dead.prototype = {

	create: function () {
	    game.add.text(Math.floor(w/2)+0.5, 50, 'oh no, you died', { font: '40px Arial', fill: '#fff' })
			.anchor.setTo(0.5, 0.5);

	    game.add.text(Math.floor(w/2)+0.5, 130, 'your score: '+score+'\nbest score: '+best_score, { font: '30px Arial', fill: '#fff', align: 'center' })
			.anchor.setTo(0.5, 0.5);

		if (this.game.device.desktop)
			var txt = 'press the UP arrow key to restart';
		else
			var txt = 'tap anywhere to restart';

	    label = game.add.text(Math.floor(w/2)+0.5, 200, txt, { font: '25px Arial', fill: '#fff' });
		label.anchor.setTo(0.5, 0.5);
		game.add.tween(label).to({ angle:1 }, 300, Phaser.Easing.Linear.None)
    	.to({ angle:-1 }, 300, Phaser.Easing.Linear.None).loop().start();

	    label2 = game.add.text(Math.floor(w/2)+0.5, h+300, 'I\'m sure you can do better!', { font: '25px Arial', fill: '#fff' });
		label2.anchor.setTo(0.5, 0.5);

		princess = this.game.add.sprite(w/2, h+h, 'princess_zoom');
    	princess.anchor.setTo(0.5, 1);

		game.add.tween(label2).to({ y: 300 }, 2000, Phaser.Easing.Bounce.Out).start();
		game.add.tween(princess).to({ y: h}, 2000, Phaser.Easing.Bounce.Out).start();    	

		if (sound) game.add.audio('dead').play('', 0, 0.3, false);

		this.cursor = this.game.input.keyboard.createCursorKeys();
	},

	update: function() {
		if (this.cursor.up.isDown || game.input.activePointer.isDown)
			game.state.start('Play');
	},

	shutdown: function() {
		game.world.removeAll();	
	}
};
