/*
  Programming and art made by www.lessmilk.com
  You can freely look at the code below, 
  but you are not allowed to use the code or art to make your own games
*/

var tile_size = 50;
var offset = {x: 25, y: 50};

Game.Play = function (game) { };

Game.Play.prototype = {

	create: function () {
		this.holes = game.add.group();
	    this.holes.createMultiple(10, 'hole');

		this.boxes = game.add.group();
	    this.boxes.createMultiple(10, 'box');
	    this.boxes.setAll('outOfBoundsKill', true);
	    this.boxes.setAll('inputEnabled', true);

	    this.walls = game.add.group();
	    this.walls.createMultiple(10, 'wall');
	    this.walls.setAll('body.immovable', true);

	    this.reset_button = this.game.add.sprite(w-80, 0, 'wall');
	    this.reset_button.alpha = 0;
	    this.reset_button.scale.setTo(1.5, 0.8);
	    this.reset_button.inputEnabled = true;
	    this.reset_button.input.useHandCursor = true;
	    this.reset_button.events.onInputDown.add(this.reset_level, this);

	    game.add.text(10, 10, 'Fill the Holes', { font: '20px Arial', fill: '#fff' });
	    this.level_label = game.add.text(w/2, 10, '1/' + map.length, { font: '20px Arial', fill: '#fff' });
		this.level_label.anchor.setTo(0.5, 0);
		restart_label = game.add.text(w-70, 10, 'restart', { font: '20px Arial', fill: '#fff' });		
		this.explanation_label = game.add.text(w/2, h-35, '', { font: '20px Arial', fill: '#fff' });
		this.explanation_label.anchor.setTo(0.5, 0);

	    this.hit_s = game.add.audio('hit');
	    this.next_s = game.add.audio('next');
	    game.add.audio('music').play('', 0, 0.15, true);

	    this.holes_to_fill = 0;
	    this.level = 0;
	    this.timer_end_level = 0;
	   
	    this.draw_level();
	},

	update: function() {	    
		if (game.physics.collide(this.boxes, this.walls))
			this.hit_s.play('', 0, 0.3, false);

		game.physics.overlap(this.boxes, this.holes, this.collide_box_hole, null, this);

		if (this.holes_to_fill == 0) {
			this.holes_to_fill = 42;
			this.timer_end_level = game.time.now + 1200;
			this.clear_level2();
		}

		if (this.timer_end_level != 0 && this.timer_end_level < game.time.now) {
			this.timer_end_level = 0;
			this.next_level();	
		}

		this.hand = false;
		this.boxes.forEachAlive(this.do_hover, this);
		if (this.hand || Phaser.Rectangle.contains(this.reset_button.body, game.input.x, game.input.y))
			game.stage.canvas.style.cursor = "pointer";
		else 
			game.stage.canvas.style.cursor = "default";
	},

	do_hover: function(box) {
        if (Phaser.Rectangle.contains(box.body, game.input.x, game.input.y)) 
	        this.hand = true;
	},

	draw_level: function() {
		this.next_s.play('', 0, 0.1, false);
		var level = map[this.level];

		for (var i = 0; i < level.length; i++) 
            for (var j = 0; j < level[i].length; j++) 
                if (level[i][j] != 0)
                	this.add_tile(j*tile_size+offset.x, i*tile_size+offset.y, level[i][j]);

		this.explanation_label.x = w/2;
		this.explanation_label.y = h-35;
        this.explanation_label.content = text[this.level];
        this.explanation_label.scale.setTo(0.1, 0.1);
		this.game.add.tween(this.explanation_label.scale).to({x:1, y:1}, 1000, Phaser.Easing.Bounce.Out).start();
	},

	add_tile: function(x, y, type) {
		var tile;

		if (type == 1) {
			tile = this.holes.getFirstExists(false);
			this.holes_to_fill += 1;
		}
		else if (type == 2) {
			tile = this.boxes.getFirstExists(false);
			tile.scale.setTo(1, 1);
			tile.events.onInputUp.add(this.box_clicked, this);
		}
		else if (type == 3) {
			tile = this.walls.getFirstExists(false);
		}

		tile.scale.setTo(1, 1);
		tile.anchor.setTo(0.5, 0.5);
		tile.reset(x+tile.width/2, y+tile.height/2);
		tile.scale.setTo(0.1, 0.1);
		this.game.add.tween(tile.scale).to({x:1, y:1}, 1000, Phaser.Easing.Bounce.Out).start();
	},

	collide_box_hole: function(box, hole) {
		if (!box.alive || !hole.alive)
			return;

		if (box.x > hole.x-15 && box.x < hole.x+15 && box.y > hole.y-15 && box.y < hole.y+15) {
			box.body.velocity.x = 0;
			box.body.velocity.y = 0;
			box.reset(hole.x, hole.y);
			this.holes_to_fill -= 1;
			box.alive = false;
			hole.alive = false;
			this.hit_s.play('', 0, 0.3, false);
			this.game.add.tween(box.scale).to({x:0.8, y:0.8}, 300, Phaser.Easing.Linear.None).start();
		}
	},

	box_clicked: function(box,pointer) {
		user_clicks += 1;

		if (!box.alive || box.body.velocity.x != 0 || box.body.velocity.y != 0) 
			return;

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

	reset_level: function() {
		user_clicks += 1;
		this.clear_level();
		this.draw_level();
	},

	next_level: function() {
		this.clear_level();
		this.level += 1;

		if (this.level == map.length) {
			this.game.state.start('End');
			return;
		}

		this.level_label.content = (this.level+1) +'/' + map.length;
		
		this.draw_level();
	},

	clear_level: function() {
		this.boxes.callAll('kill');
		this.walls.callAll('kill');
		this.holes.callAll('kill');		
		this.holes_to_fill = 0;
	},

	clear_level2: function() {
		this.boxes.forEach(this.remove_from_board, this);
		this.walls.forEach(this.remove_from_board, this);
		this.holes.forEach(this.remove_from_board, this);	
		this.remove_from_board(this.explanation_label);
	},

	remove_from_board: function(tile) {
		game.add.tween(tile).to({alpha:1}, 500, Phaser.Easing.Linear.None).to({x:'-500'}, 500, Phaser.Easing.Quadratic.In).start();
	}
};

