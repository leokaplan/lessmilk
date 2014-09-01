
Game.Menu = function (game) { };

Game.Menu.prototype = {
	create: function () {
        var space_key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        space_key.onDown.add(this.start_game, this);

		this.bad = this.game.add.sprite(w/2, h/2-120, 'bad');
		this.bad.anchor.setTo(0.5, 1);
		this.bad.animations.add('walk', [0, 1], 5, true).play(); 

		this.circle = this.game.add.sprite(w/2, h/2, 'circle');
		this.circle.anchor.setTo(0.5, 0.5);   		

		var s = { font: '20px Arial', fill: '#fff', align: 'center' };
		var start_label = game.add.text(w/2+0.5, h/2+0.5, "press space to\nstart the game", s);
		start_label.anchor.setTo(0.5, 0.5);
		game.add.tween(start_label.scale).to({x:1.1, y:1.1 }, 300).to({x:1, y:1 }, 300).loop().start();

		var start_label = game.add.text(w/2+0.5, h-30, "try to save the rabbits by pressing space", s);
		start_label.anchor.setTo(0.5, 0.5);

		var s = { font: '30px Arial', fill: '#fff', align: 'center' };
		title_label = game.add.text(w/2+0.5, 30, "I Hate Rabbits!", s);
		title_label.anchor.setTo(0.5, 0.5);
	},
	
	start_game: function () {
		this.game.state.start('Play');
	}
};
