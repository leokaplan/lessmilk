/*
  Programming and art made by www.lessmilk.com
  You can freely look at the code below, 
  but you are not allowed to use the code or art to make your own games
*/

Game.Play = function (game) { };

Game.Play.prototype = {

	create: function () {
		this.cursor = game.input.keyboard.createCursorKeys();

		this.player = game.add.sprite(w/2, h/2, 'player');
	    this.player.body.collideWorldBounds = true;
	    this.player.animations.add('bottom', [0, 1], 10, true);
	    this.player.animations.add('top', [4, 5], 10, true);
    	this.player.animations.add('right', [2, 3], 10, true);
    	this.player.animations.add('left', [6, 7], 10, true);

		this.enemies1 = game.add.group();
	    this.enemies1.createMultiple(30, 'enemy1');
	    this.enemies1.setAll('outOfBoundsKill', true);

		this.enemies2 = game.add.group();
	    this.enemies2.createMultiple(30, 'enemy2');
	    this.enemies2.setAll('outOfBoundsKill', true);
	    
	    this.labelScore = game.add.text(15, 10, 'score: 0', { font: '20px Arial', fill: '#fff' });
	    this.labelKeys = game.add.text(Math.floor(w/2)+1, h-50, 'use the arrow keys to move', { font: '20px Arial', fill: '#fff' });
	    this.labelKeys.anchor.setTo(0.5, 1);

	    this.hit_s = game.add.audio('hit');
	    this.enemyTime = 0;
	    this.scoreTime = 0;
	    score = 0;
	    this.firstKey = false;
	},

	update: function() {
		this.player.body.velocity.x = 0;
		this.player.body.velocity.y = 0;

		if (this.cursor.up.isDown && !this.firstKey) {
			this.firstKey = true;
			this.game.add.tween(this.labelKeys).to( { alpha: 0 }, 800, Phaser.Easing.Linear.None).start();
		}

		if (this.cursor.left.isDown) {
			this.player.body.velocity.x = -300;
			this.player.animations.play('left');
		} 
	    else if (this.cursor.right.isDown) {
	        this.player.body.velocity.x = 300;
	        this.player.animations.play('right');
	    }
	    else if (this.cursor.up.isDown) {
	        this.player.body.velocity.y = -300; 
	        this.player.animations.play('top');
	    }
	    else if (this.cursor.down.isDown) {
	        this.player.body.velocity.y = 300;
	        this.player.animations.play('bottom');
	    }
	    else
	    	this.player.animations.stop();

	    if (this.game.time.now > this.enemyTime) 
	    	this.newEnemy();

	    if (this.game.time.now > this.scoreTime) {
	    	this.scoreTime = game.time.now + 1000;
	    	score += 1;
	    	this.labelScore.content = 'score: ' + score;
	    }

	    game.physics.overlap(this.player, this.enemies1, this.playerHit, null, this);
	    game.physics.overlap(this.player, this.enemies2, this.playerHit, null, this);
	},

	newEnemy: function() {
		this.enemyTime = game.time.now + 500; 

		if (rand(2)==1)
	    	var enemy = this.enemies1.getFirstExists(false);
	    else
	    	var enemy = this.enemies2.getFirstExists(false);

	    enemy.anchor.setTo(0.5, 0.5);
	    var randu = rand(4);

	    if (randu == 0){
            x = rand(w);
            y = -enemy.height/2+2;
            tox = rand(w); 
            toy = h + enemy.height;
        }
        else if (randu == 1){
            x = rand(w);
            y = h + enemy.height/2-2;
            tox = rand(w); 
            toy = -enemy.height;
        }
        else if (randu == 2){
            x = -enemy.width/2+2;
            y = rand(h);
            tox = w + enemy.width; 
            toy = rand(h);
        }
        else if (randu == 3){
            x = w + enemy.width/2-2;
            y = rand(h);
            tox = -enemy.width; 
            toy = rand(h);
        }	

        enemy.reset(x, y);
        enemy.angle = 90 + Math.atan2(y - toy, x - tox) * 180 / Math.PI;

	    this.game.add.tween(enemy).to( { x: tox, y: toy }, 3000, Phaser.Easing.Linear.None).start();
	    enemy.animations.add('move');
	    enemy.animations.play('move', 5, true);
	},

	playerHit: function(player, enemy) {
		game.state.start('Over');
	}

};

