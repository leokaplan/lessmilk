Game = {};

var w = 500;
var h = 400;
var user_clicks = 0;

function rand(num){ return Math.floor(Math.random() * num) };

function in_triangle(pt, a, b, c) {
	var b1 = sign(pt, a, b) < 0;
	var b2 = sign(pt, b, c) < 0;
	var b3 = sign(pt, c, a) < 0;

	return ((b1 == b2) && (b2 == b3));
};

function sign(pt, a, b) {
	return (pt.x - b.x) * (a.y - b.y) - (a.x - b.x) * (pt.y - b.y);
}



Game.Boot = function (game) { };

Game.Boot.prototype = {
	preload: function () {
		game.stage.backgroundColor = '#1abc9c';
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
		preloading2.alpha = 0.5;		
		preloading = game.add.sprite(w/2, h/2+15, 'loading');
		preloading.x -= preloading.width/2;
		game.load.setPreloadSprite(preloading);

		game.load.image('wall', 'images/wall.png');
		game.load.image('box', 'images/box.png');
		game.load.image('hole', 'images/hole.png');
		game.load.image('arrows', 'images/arrows.png');

		game.load.audio('hit', 'sounds/hit.wav');
		game.load.audio('next', 'sounds/next.wav');
		game.load.audio('music', 'sounds/music.wav');
	},
	create: function () {
		game.state.start('Menu');
	}
};
