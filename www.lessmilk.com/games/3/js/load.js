Game = {};

var w = 600;
var h = 200;
var death = 0;

function rand(num){ return Math.floor(Math.random() * num) };


Game.Load = function (game) {

};

Game.Load.prototype = {
	preload: function () {
	    game.stage.backgroundColor = '#9b59b6';
	    label1 = game.add.text(Math.floor(w/2), Math.floor(h/2)-20, 'Box Jump', { font: '30px Arial', fill: '#fff' });
	    label2 = game.add.text(Math.floor(w/2)+0.5, Math.floor(h/2)+20+0.5, 'loading...', { font: '16px Arial', fill: '#fff' });
		label1.anchor.setTo(0.5, 0.5);
		label2.anchor.setTo(0.5, 0.5);

		game.load.image('player', 'images/player.png');
		game.load.image('line', 'images/line.png');
		game.load.image('cube', 'images/cube.png');
		game.load.image('pixel', 'images/pixel.png');
		game.load.audio('hit', 'sounds/hit.wav');
		game.load.audio('jump', 'sounds/jump.wav');
		game.load.audio('music', 'sounds/music.wav');
	},
	create: function () {
		game.state.start('Play');
	}
};
