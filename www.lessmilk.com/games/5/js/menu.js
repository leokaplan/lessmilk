Game.Menu = function (game) { };

Game.Menu.prototype = {

	create: function () {
		game_label = game.add.text(w/2+0.5, 50, 'Fill the Holes', { font: '50px Arial', fill: '#fff' });
		game_label.anchor.setTo(0.5, 0.5);
		explanation_label = game.add.text(w/2+0.5, h-30+0.5, 'click on the box above to start', { font: '20px Arial', fill: '#fff', align:'center' });
		explanation_label.anchor.setTo(0.5, 0.5);

    	this.arrows = this.game.add.sprite(w/2, h/2, 'arrows');
    	this.arrows.anchor.setTo(0.5, 0.5);
		game.add.tween(this.arrows.scale).to({ x: 1.2, y: 1.2 }, 1000, Phaser.Easing.Linear.None)
    	.to({ x: 1, y: 1 }, 1000, Phaser.Easing.Linear.None).loop().start();

    	box = this.game.add.sprite(w/2, h/2, 'box');
    	box.inputEnabled = true;
    	box.anchor.setTo(0.5, 0.5);
    	box.input.useHandCursor = true;
    	box.events.onInputUp.add(this.box_clicked, this);
    	box.events.onOutOfBounds.add(function(){game.state.start('Play');});
	},

	box_clicked: function(box, pointer) {
		game.add.tween(this.arrows).to({ alpha: 0 }, 400, Phaser.Easing.Linear.None).start();

		var center = { x: box.x, y: box.y };
		var speed = 300;

		if (in_triangle(game.input, box.topLeft, box.topRight, center))
			box.body.velocity.y = -speed;
		else if (in_triangle(game.input, box.bottomLeft, box.bottomRight, center))
			box.body.velocity.y = speed;
		else if (in_triangle(game.input, box.bottomLeft, box.topLeft, center))
			box.body.velocity.x = -speed;
		else
			box.body.velocity.x = speed;

		game.stage.canvas.style.cursor = "default";
	},
};
