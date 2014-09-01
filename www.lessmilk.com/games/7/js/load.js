Game = {};

var w = 400;
var h = 500;
var score = 0;
var best_score = 0;
var sound = true;

function rand(num){ return Math.floor(Math.random() * num) };


Game.Boot = function (game) { };

Game.Boot.prototype = {
	preload: function () {
		game.stage.backgroundColor = '#ecf0f1';
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
		this.input.maxPointers = 1;

	    label2 = game.add.text(Math.floor(w/2)+0.5, Math.floor(h/2)-15+0.5, 'loading...', { font: '30px Arial', fill: '#2c3e50' });
		label2.anchor.setTo(0.5, 0.5);

		preloading2 = game.add.sprite(w/2, h/2+15, 'loading2');
		preloading2.x -= preloading2.width/2;
		preloading = game.add.sprite(w/2, h/2+19, 'loading');
		preloading.x -= preloading.width/2;
		game.load.setPreloadSprite(preloading);

		game.load.spritesheet('dot', 'images/dot.png', 50, 50);
		game.load.spritesheet('sound', 'images/sound.png', 28, 22);
		game.load.image('bar', 'images/bar.png');
		game.load.image('progress', 'images/progress.png');
		game.load.image('tuto', 'images/tuto.png');
		game.load.image('question', 'images/question.png');

		game.load.audio('tap1', 'sounds/tap1.wav');
		game.load.audio('tap2', 'sounds/tap2.wav');
		game.load.audio('tap3', 'sounds/tap3.wav');

		game.load.audio('combo', 'sounds/combo.wav');
	},
	create: function () {
		game.state.start('Menu');
	}
};
