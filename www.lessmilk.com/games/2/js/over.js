Game.Over = function (game) {
	this.cursor
};

Game.Over.prototype = {
	create: function () {		
		label = game.add.text(w/2, h/2, 'game over\n\nscore: '+score+'\n\npress the UP arrow\nkey to restart', { font: '30px Arial', fill: '#fff', align: 'center' });
		label.anchor.setTo(0.5, 0.5);
		
		this.cursor = game.input.keyboard.createCursorKeys();
		this.time = this.game.time.now + 800;

		game.add.audio('dead').play('', 0, 0.2);
	},

	update: function() {
		if (this.game.time.now > this.time && this.cursor.up.isDown)
			game.state.start('Play');
	}
};