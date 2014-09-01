/*
  Programming and art made by www.lessmilk.com
  You can freely look at the code below, 
  but you are not allowed to use the code or art to make your own games
*/

Game.Play = function (game) { };

Game.Play.prototype = {

	create: function () {
		this.space_key = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		this.space_key.onDown.add(this.jump, this);

		this.rabbits = game.add.group();
		this.rabbits.createMultiple(30, 'rabbit');

		this.bad = this.game.add.sprite(w/2, h/2, 'bad');
		this.bad.anchor.setTo(0.5, 1);
		this.bad.animations.add('walk', [0, 1], 5, true).play();

		this.circle = this.game.add.sprite(w/2, h/2, 'circle');
		this.circle.anchor.setTo(0.5, 0.5);

		var s = { font: '20px Arial', fill: '#fff', align: 'center' };
		this.start_label = game.add.text(w/2+0.5, 30, "try to save the rabbits by pressing space", s);
		this.start_label.anchor.setTo(0.5, 0.5);

		var s2 = { font: '80px Arial', fill: '#fff', align: 'center' };
		this.world_label = game.add.text(w/2, h/2, "10", s2);
		this.world_label.anchor.setTo(0.5, 0.5);

		score = 65;
		level = 0;
		this.change_level = true;
		this.end = 0;

		this.a_s = this.game.add.audio("a");
		this.a_s.volume = 0.3;
		this.e_s = this.game.add.audio("e");
		this.e_s.volume = 0.3;
		this.i_s = this.game.add.audio("i");
		this.i_s.volume = 0.3;
		this.o_s = this.game.add.audio("o");
		this.o_s.volume = 0.3;
		this.u_s = this.game.add.audio("u");
		this.u_s.volume = 0.3;
		this.music_s = game.add.audio('music');
		this.music_s.play('', 0, 0.4, false);
	},

	update: function() {	
		if (this.end != 0 && this.end < game.time.now) {
			this.music_s.stop();
			this.game.state.start('End');
		}

		game.physics.overlap(this.bad, this.rabbits, this.hit, null, this);

		if (this.bad.angle >= -2 && this.bad.angle <= 2 && this.change_level) {
			this.change_level = false;
			this.draw_level();
		}
		else if (this.bad.angle > 2)
			this.change_level = true;

		this.bad.angle += 1.2;
		
		var x = w/2+(this.circle.width/2-4)*Math.cos(this.bad.rotation-Math.PI/2);
		var y = h/2+(this.circle.width/2-4)*Math.sin(this.bad.rotation-Math.PI/2);
		this.bad.reset(x, y);
	},

	add_rabbit: function(angle, i) {
		var rabbit = this.rabbits.getFirstDead();

		rabbit.rotation = 0;
		rabbit.rotation = angle + Math.PI/2;

		var x_out = w/2 + (this.circle.width+100) * Math.cos(angle);
		var y_out = h/2 + (this.circle.width+100) * Math.sin(angle);
		var x_in = w/2 + (this.circle.width/2-2) * Math.cos(angle);
		var y_in = h/2 + (this.circle.width/2-2) * Math.sin(angle);

		rabbit.jump = false;
		rabbit.alpha = 1;
		rabbit.pos = i;
		rabbit.reset(x_out, y_out);
		rabbit.anchor.setTo(0.5, 1);

		rabbit.t = this.game.add.tween(rabbit);
		rabbit.t.to({x: x_in, y: y_in}, 300).start();
	},

	hit: function(bad, rabbit) {
		rabbit.kill();
		/*game.add.tween(this.circle.scale).to({x:3, y:3}, 500).start();
		game.add.tween(this.world_label).to({alpha: 0}, 100).start();
		this.start_label.alpha = 0;
		this.rabbits.forEachAlive(function(r){r.kill();}, this);
		this.end = game.time.now + 500;*/

		score -= 1;

		var sound = this.game.add.audio("haho");
		sound.volume = 0.5;
		sound.play();
	},

	jump_sound: function() {
		var r = rand(5);

		if (r == 0) this.a_s.play();
		else if (r == 1) this.e_s.play();
		else if (r == 2) this.i_s.play();
		else if (r == 3) this.o_s.play();
		else if (r == 4) this.u_s.play();
	},

	jump: function() {
		var min = 20, min_r;
		this.rabbits.forEachAlive(function(r){
			if (r.jump == false && r.pos < min) {
				min = r.pos;
				min_r = r;
			}
		}, this);

		var rabbit = min_r;

		if (min != 20 && !rabbit.t.isRunning) {
			this.jump_sound();

			var x = w/2+(this.circle.width/2+90)*Math.cos(rabbit.rotation-Math.PI/2);
			var y = h/2+(this.circle.width/2+90)*Math.sin(rabbit.rotation-Math.PI/2);
			rabbit.t2 = this.game.add.tween(rabbit)
				.to({x: x, y: y}, 400)
				.to({x: rabbit.x, y: rabbit.y}, 600);
			rabbit.t2.start();	
			rabbit.jump = true;	
		}
	},

	draw_level: function() {
		this.rabbits.forEachAlive(function(r){
			var t = this.game.add.tween(r).to({alpha:0}, 300).start();
			t.onComplete.add(function(){this.kill()}, r);
		}, this);
		
		this.world_label.content = 9 - level;

		if (level == 9) {
			this.game.state.start('End');
			return;
		}

		if (level == 1)
			this.game.add.tween(this.start_label).to({alpha:0}, 500).start();

		var l = map[level];

		for (var i = 0; i < l.length; i++) 
			if (l[i] != 0)
				this.add_rabbit(i*(Math.PI/10), i);

		level += 1;
	}
};
