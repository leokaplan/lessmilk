Game.End = function (game) { };

Game.End.prototype = {

	create: function () {
	    label1 = game.add.text(w/2, h/2-20, 'you won! :-D', { font: '30px Arial', fill: '#fff' });
		label1.anchor.setTo(0.5, 0.5);

	    label2 = game.add.text(w/2, h/2+20, 'you clicked '+user_clicks+' times during the game', { font: '20px Arial', fill: '#fff' });
		label2.anchor.setTo(0.5, 0.5);

		game.add.tween(label1.scale).to({ x: 1.3, y: 1.3 }, 1000, Phaser.Easing.Linear.None)
    	.to({ x: 1, y: 1 }, 1000, Phaser.Easing.Linear.None).loop().start();

    	emitter = game.add.emitter(w/2, -200, 100);
    	emitter.makeParticles(['box', 'hole', 'wall']);

    	emitter.start(false, 5000, 200);

	}
};
