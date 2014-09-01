Game = {};

var w = 600;
var h = 400;
var sound = true;
var dead = 0;

function rand(num){ return Math.floor(Math.random() * num) };


Game.Boot = function (game) { };

Game.Boot.prototype = {
	preload: function () {
		game.stage.backgroundColor = '#00a2ff';
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

		game.load.spritesheet('player', 'images/player3.png', 24, 30);
		game.load.image('logo', 'images/logo2.png');
		game.load.image('success', 'images/success2.png');
		game.load.image('coin', 'images/coin.png');
		game.load.image('enemy', 'images/enemy.png');
		game.load.spritesheet('sound', 'images/sound4.png', 28, 22);

		game.load.audio('coin', 'sounds/coin.wav');
		game.load.audio('dead', 'sounds/dead.wav');
		game.load.audio('yeah', 'sounds/yeah.mp3');
		game.load.audio('jump', 'sounds/jump.wav');
		game.load.audio('music', 'sounds/music.wav');

		this.game.load.tilemap('map1', 'levels/1.json', null, Phaser.Tilemap.TILED_JSON);
		this.game.load.tilemap('map2', 'levels/2.json', null, Phaser.Tilemap.TILED_JSON);
		this.game.load.tilemap('map3', 'levels/3.json', null, Phaser.Tilemap.TILED_JSON);
		this.game.load.tilemap('map4', 'levels/4.json', null, Phaser.Tilemap.TILED_JSON);
		this.game.load.tilemap('map5', 'levels/5.json', null, Phaser.Tilemap.TILED_JSON);

        this.game.load.image('tiles', 'images/tiles.png');	
	},
	create: function () {
		game.state.start('Menu');
	}
};
