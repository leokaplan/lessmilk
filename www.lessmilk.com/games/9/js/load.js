Game = {};

var w = 450;
var h = 450;
var level = 0;
var score = 0;
var best_score = 0;

function rand(num){ return Math.floor(Math.random() * num) };


Game.Boot = function (game) { };

Game.Boot.prototype = {
	preload: function () {
		game.stage.backgroundColor = '#2ecc71';
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

		game.load.image('rabbit', 'images/rabbit2.png');
		game.load.image('circle', 'images/circle.png');
		game.load.spritesheet('bad', 'images/bad.png', 36, 40);
		game.load.image('tweet', 'images/tweet.png');
		game.load.image('facebook', 'images/facebook.png');

		game.load.audio('music', 'sounds/music.wav');
		game.load.audio('a', 'sounds/a.mp3');
		game.load.audio('e', 'sounds/e.mp3');
		game.load.audio('i', 'sounds/i.mp3');
		game.load.audio('o', 'sounds/o.mp3');
		game.load.audio('u', 'sounds/u.mp3');
		game.load.audio('yeah', 'sounds/yeah.mp3');
		game.load.audio('haho', 'sounds/haho.mp3');
	},
	
	create: function () {
		game.state.start('Menu');
	}
};
