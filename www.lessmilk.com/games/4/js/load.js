Game = {};

var w = 500;
var h = 350;

function rand(num){ return Math.floor(Math.random() * num) };

Game.Boot = function (game) { };

Game.Boot.prototype = {
	preload: function () {
		game.load.image('loading', 'images/loading.png');
	},
	create: function() {
		this.game.stage.scale.minWidth = 600;
		this.game.stage.scale.minHeight = 420;
		this.game.stage.scale.setSize();

		this.game.state.start('Load');
	}
};

Game.Load = function (game) { };

Game.Load.prototype = {
	preload: function () {
	    game.stage.backgroundColor = '#1bb7ff';
	    label2 = game.add.text(Math.floor(w/2)+0.5, Math.floor(h/2)-15+0.5, 'loading...', { font: '30px Arial', fill: '#fff' });
		label2.anchor.setTo(0.5, 0.5);
		
		preloading = game.add.sprite(w/2, h/2+15, 'loading');
		preloading.x -= preloading.width/2;
		game.load.setPreloadSprite(preloading);

		game.load.image('brick', 'images/brick.png');
		game.load.image('bg', 'images/bg.png');
		game.load.spritesheet('player', 'images/player.png', 27, 33);
		game.load.spritesheet('enemy', 'images/enemy.png', 18, 27);
		game.load.image('coin', 'images/coin.png');
		game.load.audio('jump', 'sounds/jump.wav');
		game.load.audio('kill', 'sounds/kill.wav');
		game.load.audio('dead', 'sounds/dead.wav');
		game.load.audio('coin', 'sounds/coin.wav');
		game.load.audio('music', 'sounds/music.wav');
	},
	create: function () {
		game.state.start('Menu');
	}
};
