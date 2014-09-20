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

		var thisdir = "file:///home/ceu/ceu-sdl/lessmilk/www.lessmilk.com/games/2";
		game.load.image('bg', thisdir+'/images/bg.png');
		game.load.image('player', thisdir+'/images/player.png');
		game.load.image('fire', thisdir+'/images/fire.png');
	    game.load.image('bonus', thisdir+'/images/bonus.png');
		game.load.image('pixel', thisdir+'/images/pixel.png');
		game.load.spritesheet('bullet', thisdir+'/images/bullet.png', 16, 32);
		game.load.image('enemy', thisdir+'/images/enemy.png');
		game.load.audio('hit', thisdir+'/sounds/hit.wav');
		game.load.audio('fire', thisdir+'/sounds/fire.wav');
		game.load.audio('exp', thisdir+'/sounds/exp.wav');
		game.load.audio('dead', thisdir+'/sounds/dead.wav');
	    game.load.audio('bonus', thisdir+'/sounds/bonus.wav');
	},
	create: function () {
		game.state.start('Intro');
	}
};
