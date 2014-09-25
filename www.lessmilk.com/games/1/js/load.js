Game = {};

var w = 350;
var h = 350;
var score = 0;

function rand(num){ return Math.floor(Math.random() * num) };

Game.Load = function (game) { };

Game.Load.prototype = {
	preload: function () {
	    game.stage.backgroundColor = '#34495e';
	    label = game.add.text(w/2, h/2, 'loading...', { font: '30px Arial', fill: '#fff' });
		label.anchor.setTo(0.5, 0.5);
	    var path = document.location.pathname;
        var dir = path.substring(0, path.lastIndexOf('/'));
		var thisdir = "file://" + dir;
		game.load.spritesheet('player', thisdir+'/images/player.png', 20, 24);
		game.load.spritesheet('enemy1', thisdir+'/images/enemy1.png', 32, 36);
		game.load.spritesheet('enemy2', thisdir+'/images/enemy2.png', 28, 40);
		game.load.audio('hit', thisdir+'/sounds/hit.wav');

	},
	create: function () {
		game.state.start('Play');
	}
};
