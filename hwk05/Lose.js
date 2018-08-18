gameObj.Lose = function (game) {};

gameObj.Lose.prototype = {
    create: function () {
        console.log('State - Lose');

        //Add background image
        var spBackground = this.add.sprite(0, 0, 'background');

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

        //  Lose screen
        var spError = this.add.sprite(0, 0, 'error');

        // Add boosting spaceship
        var spSpaceship = this.add.sprite(500, 430, 'spritesheet');
        var broken = spSpaceship.animations.add('broken');
        spSpaceship.animations.play('broken', 8, true);
        
        //  Load Buttons
        var btPlay1 = this.add.button(800, 150, 'button', this.backFun, this, 1, 0, 2);
        btPlay1.anchor.setTo(.5, .5);



        //Add text
        var timeStr = 'Final Time: ' + gameObj.gTime;
        var scoreStr = 'Final Score: ' + gameObj.gScore;
        var btStrWin = 'BACK';
        var winStr1 = 'CONGRATULATIONS!';
        var winStr2 = 'You were able to escape';
        var winStr3 = 'from gliched space!';
        var replatStr = 'Press Space to Replay';


        var txTime = this.add.text(250, 550, timeStr);
        var txScore = this.add.text(650, 550, scoreStr);
        var txBtStrWin = this.add.text(800, 150, btStrWin);
        var txReplay = this.add.text(this.world.centerX, 650, replatStr);


        txTime.anchor.setTo(.5, .5);
        txScore.anchor.setTo(.5, .5);
        txBtStrWin.anchor.setTo(.5, .5);
        txReplay.anchor.setTo(.5, .5);



        txTime.fill = '#8A160D';
        txScore.fill = '#8A160D';
        txBtStrWin.fill = 'white';
        txReplay.fill = '#ccc';


        txTime.font = 'VT323';
        txScore.font = 'VT323';
        txBtStrWin.font = 'VT323';
        txReplay.font = 'VT323';


        txTime.fontSize = 36;
        txScore.fontSize = 36;
        txBtStrWin.fontSize = 36;
        txReplay.fontSize = 30;



        // end createText
    },
    customFunName: function () {

    },

    backFun: function () {
        console.log('Play button clicked');
        this.state.start('Play');

    }

};
