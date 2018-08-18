gameObj.Play = function (game) {
    var txScore;

    var timerObj;
    var timerSeconds;

    var txTime;

};

gameObj.Play.prototype = {
    create: function () {
        console.log('State - Play');

        //Add background image
        var spBackground = this.add.sprite(0, 0, 'background');


        // Add spaceship boosting animation
        var spSpaceship2 = this.add.sprite(300, 600, 'boost');
        var boost = spSpaceship2.animations.add('boost');
        spSpaceship2.animations.play('boost', 12, true);


        //  Load the Graphics
        var spAsteriod_b1 = this.add.sprite(500, 250, 'asteriod_b1');
        var spAsteriod_b2 = this.add.sprite(50, 120, 'asteriod_b2');
        // var spAsteriod_b3 = this.add.sprite(0,0,'asteriod_b3');
        var spAsteriod_m1 = this.add.sprite(600, 20, 'asteriod_m1');
        var spAsteriod_m2 = this.add.sprite(700, 500, 'asteriod_m2');
        var spAsteriod_s1 = this.add.sprite(250, 20, 'asteriod_s1');
        var spAsteriod_s2 = this.add.sprite(100, 500, 'asteriod_s2');
        var spAsteriod_s3 = this.add.sprite(200, 400, 'asteriod_s3');
        var spAsteriod_s4 = this.add.sprite(800, 400, 'asteriod_s4');

        var spHeart = this.add.sprite(730, 650, 'heart');
        var spHeart = this.add.sprite(790, 650, 'heart');
        var spHeart = this.add.sprite(850, 650, 'heart');

        //  Load Buttons
        this.load.spritesheet('button', 'img/play_button.png', 135, 50);
        var btPlay1 = this.add.button(800, 150, 'button', this.winnerFun, this, 1, 0, 2);
        var btPlay2 = this.add.button(800, 225, 'button', this.loserFun, this, 1, 0, 2);
        var btPlay3 = this.add.button(800, 300, 'button', this.pointsFun, this, 1, 0, 2);
        btPlay1.anchor.setTo(.5, .5);
        btPlay2.anchor.setTo(.5, .5);
        btPlay3.anchor.setTo(.5, .5);

        gameObj.gScore = 0; 

        //Add text
        var timeStr = '01:20';
        var scoreStr = '0';

        var btStrWin = 'WIN';
        var btStrLose = 'LOSE';
        var btStrBack = 'POINT';

        txTime = this.add.text(this.world.centerX, 50, timeStr);
        txScore = this.add.text(100, 670, scoreStr);
        
        var txBtStrWin = this.add.text(800, 150, btStrWin);
        var txBtStrLose = this.add.text(800, 225, btStrLose);
        var txBtStrBack = this.add.text(800, 300, btStrBack);

        txTime.anchor.setTo(.5, .5);
        txScore.anchor.setTo(.5, .5);
        txBtStrWin.anchor.setTo(.5, .5);
        txBtStrLose.anchor.setTo(.5, .5);
        txBtStrBack.anchor.setTo(.5, .5);


        txTime.fill = 'white';
        txScore.fill = 'Red';
        txBtStrWin.fill = 'white';
        txBtStrLose.fill = 'white';
        txBtStrBack.fill = 'white';

        txTime.font = 'Orbitron'; //space here is space
        txScore.font = 'VT323'; //space here is space
        txBtStrWin.font = 'VT323';
        txBtStrLose.font = 'VT323';
        txBtStrBack.font = 'VT323';

        txTime.fontSize = 36;
        txScore.fontSize = 50;
        txBtStrWin.fontSize = 36;
        txBtStrLose.fontSize = 36;
        txBtStrBack.fontSize = 36;

        // COuntdown
        timerSeconds = 80;

        timerObj = this.game.time.create(false);

        timerObj.loop(1000, this.updateTimerFun, this);

        timerObj.start();

        // end createText
    },

    winnerFun: function () {
        console.log('Win button clicked');
        this.state.start('Win');
    },

    loserFun: function () {
        console.log('Lose button clicked');
        this.state.start('Lose');
    },
    pointsFun: function () {
        console.log('pointsFun called');
        gameObj.gScore += 10;
        txScore.text = gameObj.gScore;
    },
    updateTimerFun: function () {
        console.log('updateTimerFun called');

        if (timerSeconds > 0) {
            timerSeconds--;
            var displayMin = Math.floor(timerSeconds / 60);
            if (displayMin < 10) {
                displayMin = "0" + displayMin;
            }
            var displaySec = timerSeconds % 60;
            if (displaySec < 10) {
                displaySec = "0" + displaySec;
            }
            gameObj.gTime = displayMin + ":" + displaySec;
            txTime.text = gameObj.gTime;
        } else {
            this.winnerFun();
        }
    }
};
