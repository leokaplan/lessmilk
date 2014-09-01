
Game.Menu = function (game) { };

Game.Menu.prototype = {
	create: function () {
		this.cursor = this.game.input.keyboard.createCursorKeys();
		game.add.sprite(0, 0, 'bg');

		label = game.add.text(w/2, h-50, 'press the UP arrow key to start', { font: '25px Arial', fill: '#fff' });
		label.anchor.setTo(0.5, 0.5);

		game.add.tween(label).to({ angle:1 }, 1000, Phaser.Easing.Linear.None)
    	.to({ angle:-2 }, 1000, Phaser.Easing.Linear.None).loop().start();
	},

	update: function() {
		if (this.cursor.up.isDown)
			game.state.start('Play');
	}
};
