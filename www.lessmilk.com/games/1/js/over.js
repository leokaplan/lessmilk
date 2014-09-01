Game.Over = function (game) { };

Game.Over.prototype = {
	create: function () {		
		label = game.add.text(w/2, h/2, 'game over\n\nscore: '+score+'\n\npress the UP arrow key\nto restart', { font: '30px Arial', fill: '#fff', align: 'center' });
		label.anchor.setTo(0.5, 0.5);
		
		this.cursor = game.input.keyboard.createCursorKeys();
		this.time = this.game.time.now + 800;

		game.add.audio('hit').play('', 0, 0.1);
	},

	update: function() {
		if (this.game.time.now > this.time && this.cursor.up.isDown)
			game.state.start('Play');
	}
};