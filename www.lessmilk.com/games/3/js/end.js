Game.End = function (game) {

};

Game.End.prototype = {
	create: function () {
	    label1 = game.add.text(w/2, h/2-20, 'you finished the game! :-D', { font: '30px Arial', fill: '#fff' });
	    label2 = game.add.text(w/2, h/2+20, 'and died '+death+' times\ncan you do better?', { font: '20px Arial', fill: '#fff' });
		label1.anchor.setTo(0.5, 0.5);
		label2.anchor.setTo(0.5, 0.5);
	}
};
