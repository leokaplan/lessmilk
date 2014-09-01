Game.End = function (game) { };

Game.End.prototype = {
	create: function() {
		if (best_score == 0) {
			if (typeof(Storage) !== "undefined") {
				var tmp = localStorage.getItem("7_best_score");
				if (tmp > 0)
					best_score = tmp;
			}
		}

		game.add.text(w/2, h/2, "you ended your 20 turns\n\nyou scored: "+score+
			"\nyour best score: "+best_score, { font: "30px Arial", fill: "#2c3e50", align: "center"})
			.anchor.setTo(0.5, 0.5);

		if (score > best_score) {
			best_score = score;

			if (typeof(Storage) !== "undefined")
				localStorage.setItem("7_best_score", best_score);
		}

		label_restart = game.add.text(w/2, h-50, "click anywhere to restart", { font: "20px Arial", fill: "#2c3e50"});
		label_restart.anchor.setTo(0.5, 0.5);

		game.add.tween(label_restart).to({ angle:1 }, 300).to({ angle:-1 }, 300).loop().start();

    	emitter = game.add.emitter(w/2, -200, 100);
    	emitter.makeParticles('dot');
    	emitter.start(false, 5000, 200);
	},

	update: function() {
		if (game.input.activePointer.isDown) 
			this.game.state.start('Play');
	}
};
