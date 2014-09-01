
Game.End = function (game) { };

Game.End.prototype = {

	create: function () {
		if (score > best_score)
			best_score = score;

        var space_key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        space_key.onDown.add(this.start_game, this);

		this.circle = this.game.add.sprite(w/2, h/2, 'circle');
		this.circle.anchor.setTo(0.5, 0.5);  

        var s = { font: '30px Arial', fill: '#fff', align: 'center' };
		var score_label = game.add.text(w/2+0.5, 40, "you saved "+score+" rabbits", s);
		score_label.anchor.setTo(0.5, 0.5);

        var s = { font: '20px Arial', fill: '#fff', align: 'center' };
		var best_score_label = game.add.text(w/2+0.5, 70, "best score: "+best_score, s);
		best_score_label.anchor.setTo(0.5, 0.5);

		var start_label = game.add.text(w/2+0.5, h/2+0.5, "press space to\nrestart the game", s);
		start_label.anchor.setTo(0.5, 0.5);

		share_label = game.add.text(w/2-70+0.5, h-50, "share your score on Twitter:", s);
		share_label.anchor.setTo(0.5, 0.5);

		var t = this.game.add.button(w/2+135, h-50, 'tweet', this.tweet, this);
		t.scale.setTo(0.8, 0.8);
		t.anchor.setTo(0.5, 0.5);
		game.add.tween(t.scale).to({x:0.85, y:0.85 }, 300).to({x:0.8, y:0.8 }, 300).loop().start();

		this.time = this.game.time.now + 500;

		if (level == 9) {
			var sound = this.game.add.audio("yeah");
			sound.volume = 0.5;
			sound.play();
		}

		this.game.world.alpha = 0;
		this.game.add.tween(this.game.world).to({alpha: 1}, 1000).start();
	},
	
	start_game: function () {
		if (this.time < this.game.time.now ) {
			this.game.world.alpha = 1;
			this.game.state.start('Play');
		}
	},

	tweet: function() {
		window.open('http://twitter.com/share?text=I+just+saved+'+score+'+rabbits+at+"I+Hate+Rabbits"+game!+Try+to+beat+me+here&via=lessmilk_&url=http://www.lessmilk.com/9/', '_blank');
	}
};
