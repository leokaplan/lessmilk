Game.Intro = function (game) { };

Game.Intro.prototype = {
	create: function () {
		game.add.sprite(0, 0, 'bg');

		this.cursor = game.input.keyboard.createCursorKeys();
	},

	update: function() {
		if (this.cursor.up.isDown)
			game.state.start('Play');
	}
};