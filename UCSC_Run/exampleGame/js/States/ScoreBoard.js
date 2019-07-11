//Score board state

ScoreBoard.prototype = {
	preload: function(){
		game.stage.backgroundColor = "#ffffff";
		game.load.image('score', 'assets/img/scoretitle.png');
		game.load.image('scorecell', 'assets/img/scorecell.png');
		game.load.image('restartbutton', 'assets/img/button/restartbutton.png');
	},
	create: function(){
		var tmp = game.cache.getImage('score');
		var title = game.add.sprite(game.world.centerX - tmp.width/2.0, game.world.centerY * 0.3, 'score');
		var tmp2 = game.cache.getImage('scorecell');
		var submitForm = game.add.sprite(400 + tmp2.width/2.0, game.world.centerY * 0.7, 'scorecell').scale.setTo(0.5,0.5);

		var restartButton = game.add.button(325, 400, 'restartbutton', actionRestartClick, this, 2, 1, 0).scale.setTo(0.7,0.7);
	},
	update: function(){
		score = 0;
		
	}

}

function actionRestartClick () {
	game.state.start('Play');
}