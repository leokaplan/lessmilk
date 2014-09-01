Game = {};

var w = 350;
var h = 350;
var score = 0;

function rand(num){ return Math.floor(Math.random() * num) };

Game.Load = function (game) { };

Game.Load.prototype = {
	preload: function () {
	    game.stage.backgroundColor = '#34495e';
	    label = game.add.text(w/2, h/2, 'loading...', { font: '30px Arial', fill: '#fff' });
		label.anchor.setTo(0.5, 0.5);

		game.load.spritesheet('player', 'images/player.png', 20, 24);
		game.load.spritesheet('enemy1', 'images/enemy1.png', 32, 36);
		game.load.spritesheet('enemy2', 'images/enemy2.png', 28, 40);
		game.load.audio('hit', 'sounds/hit.wav');

	},
	create: function () {
		game.state.start('Play');
	}
};
