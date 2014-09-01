Game = {};

var w = 500;
var h = 500;
var score = 0;

function rand(num){ return Math.floor(Math.random() * num) };


Game.Boot = function (game) { };

Game.Boot.prototype = {
	preload: function () {
		game.stage.backgroundColor = '#e67e22';
		game.load.image('loading', 'images/loading.png');
		game.load.image('loading2', 'images/loading2.png');
	},
	create: function() {
		this.game.state.start('Load');
	}
};

Game.Load = function (game) { };

Game.Load.prototype = {
	preload: function () {
	    label2 = game.add.text(Math.floor(w/2)+0.5, Math.floor(h/2)-15+0.5, 'loading...', { font: '30px Arial', fill: '#fff' });
		label2.anchor.setTo(0.5, 0.5);

		preloading2 = game.add.sprite(w/2, h/2+15, 'loading2');
		preloading2.x -= preloading2.width/2;
		preloading = game.add.sprite(w/2, h/2+19, 'loading');
		preloading.x -= preloading.width/2;
		game.load.setPreloadSprite(preloading);

		game.load.image('bomb', 'images/bomb.png');
		game.load.spritesheet('city', 'images/city.png', 400, 48);
		game.load.image('explosion', 'images/explosion.png');
		game.load.image('restart', 'images/restart.png');
		game.load.image('pixel', 'images/pixel.png');

		game.load.audio('fire', 'sounds/fire.wav');
		game.load.audio('exp', 'sounds/exp.wav');
		game.load.audio('hit', 'sounds/hit.wav');

	},
	create: function () {
		game.state.start('Play');
	}
};
