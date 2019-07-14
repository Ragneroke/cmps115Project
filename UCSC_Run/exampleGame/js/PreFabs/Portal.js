//This Prefab works for the protal of the game
//The portal won't be activated unless all enemies in the stage are dead
function Portal(game, x, y, key, frame, player, count, stage){
	Phaser.Sprite.call(this,game,x,y,key,frame);
	game.physics.enable(this, Phaser.Physics.ARCADE);
	this.enableBody = true;
	this.body.immovable = true;
	this.anchor.set(0.5);
	this.scale.setTo(0.15);
	this.player = player;
	this.count = count;
	this.stage = stage;
	this.animations.add('stay', [0], 10, true);
	this.animations.add('activate', [1,1,2,2,3,3,2,2,1,1], 10, true);
	this.finish = game.add.audio('finish');
	this.finish.volume = 0.3;
	this.musicPlay = true;
}

Portal.prototype = Object.create(Phaser.Sprite.prototype);
Portal.prototype.constructor = Portal;
Portal.prototype.update = function(){
	game.physics.arcade.overlap(this, this.player, this.hitPortal, null, this);
	if(this.count != 0){
		this.animations.play('stay');
	}else{
		if(this.musicPlay){
			this.finish.play();
			this.musicPlay = false;
		}
		this.animations.play('activate');
	}
}

Portal.prototype.hitPortal = function(){
		if(this.count == 0){
			this.stage.bgmMusic.stop();
			if(stageCount == 0){
				game.state.start('Stage1');

			}else if(stageCount == 1){
				game.state.start('Stage2');
			}else if(stageCount == 2){
				game.state.start('Stage3');
			}else if(stageCount == 3){
				game.state.start('Stage4');
			}else if(stageCount == 4){
				game.time.events.add(5000, this.fadeWhite, this);
				game.state.start('Ending');

			}

		}

}