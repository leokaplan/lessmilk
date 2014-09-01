Game = {};

var w = 300;
var h = 500;
var score = 0;

function rand(num){ return Math.floor(Math.random() * num) };

Game.Load = function (game) {

};

Game.Load.prototype = {
	preload: function () {
	    game.stage.backgroundColor = '#2980b9';
	    label = game.add.text(w/2, h/2, 'loading...', { font: '30px Arial', fill: '#fff' });
		label.anchor.setTo(0.5, 0.5);

		game.load.image('bg', 'images/bg.png');
		game.load.image('player', 'images/player.png');
		game.load.image('fire', 'images/fire.png');
	    game.load.image('bonus', 'images/bonus.png');
		game.load.image('pixel', 'images/pixel.png');
		game.load.spritesheet('bullet', 'images/bullet.png', 16, 32);
		game.load.image('enemy', 'images/enemy.png');
		game.load.audio('hit', 'sounds/hit.wav');
		game.load.audio('fire', 'sounds/fire.wav');
		game.load.audio('exp', 'sounds/exp.wav');
		game.load.audio('dead', 'sounds/dead.wav');
	    game.load.audio('bonus', 'sounds/bonus.wav');
	},
	create: function () {
		game.state.start('Intro');
	}
};
