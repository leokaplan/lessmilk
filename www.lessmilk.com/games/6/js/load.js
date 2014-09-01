Game = {};

var w = 450;
var h = 600;
var score = 0;
var best_score = 0;
var sound = true;

function rand(num){ return Math.floor(Math.random() * num) };


Game.Boot = function (game) { };

Game.Boot.prototype = {
	preload: function () {
		game.stage.backgroundColor = '#a3b9ff';   
		game.load.image('loading', 'images/loading.png');
		game.load.image('loading2', 'images/loading2.png');
		game.load.image('orientation', 'images/orientation.png');
	},
	create: function() {
		if (!this.game.device.desktop) {
			document.body.style.backgroundColor="#a3b9ff";
			game.stage.scale.forceOrientation(false, true, 'orientation');
            game.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL;
            this.game.stage.scale.pageAlignHorizontally = true;
            this.game.stage.scale.pageAlignVeritcally = true;
            game.stage.scale.setShowAll();
            game.stage.scale.refresh();  
        } 

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

		game.load.image('heart', 'images/heart.png');
		game.load.image('spike', 'images/spike.png');
		game.load.image('cloud', 'images/cloud.png');
		game.load.image('ground', 'images/ground.png');
		game.load.image('platform', 'images/platform.png');
		game.load.image('princess_zoom', 'images/princess_zoom.png');
		game.load.spritesheet('princess', 'images/princess.png', 52, 72);
		game.load.image('line', 'images/line.png');
		
		game.load.spritesheet('mute', 'images/mute.png', 28, 18);

		game.load.audio('dead', 'sounds/dead.wav');
		game.load.audio('jump', 'sounds/jump.wav');
		game.load.audio('heart', 'sounds/heart.wav');
		game.load.audio('music', 'sounds/music.wav');
		game.load.audio('hit', 'sounds/hit.wav');

	},
	create: function () {
		game.state.start('Menu');
	}
};
