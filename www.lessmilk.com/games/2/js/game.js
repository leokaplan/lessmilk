var game = new Phaser.Game(w, h, Phaser.AUTO, 'gameContainer');

game.state.add('Load', Game.Load);
game.state.add('Intro', Game.Intro);
game.state.add('Play', Game.Play);
game.state.add('Over', Game.Over);

game.state.start('Load');