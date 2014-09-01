var game = new Phaser.Game(w, h, Phaser.AUTO, 'gameContainer');

game.state.add('Load', Game.Load);
game.state.add('Play', Game.Play);
game.state.add('End', Game.End);

game.state.start('Load');