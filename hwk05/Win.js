gameObj.Win = function (game) {};

gameObj.Win.prototype = {
    create: function () {
        console.log('State - Win');

        //Add background image
        var spWin = this.add.sprite(0, 0, 'win');



        // Add boosting spaceship
        //        var boost = spSpaceship2.animations.add('boost');
        //
        //        spSpaceship2.animations.play('boost', 12, true);


        //  Load the Graphics
        var spWinShipBoost = this.add.sprite(130, 200, 'winShipBoost');
        var boost = spWinShipBoost.animations.add('winShipBoost');
        spWinShipBoost.animations.play('winShipBoost', 12, true);

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
        var txWin1 = this.add.text(430, 230, winStr1);
        var txWin2 = this.add.text(430, 300, winStr2);
        var txWin3 = this.add.text(430, 350, winStr3);
        var txReplay = this.add.text(this.world.centerX, 650, replatStr);


        txTime.anchor.setTo(.5, .5);
        txScore.anchor.setTo(.5, .5);
        txBtStrWin.anchor.setTo(.5, .5);
        txReplay.anchor.setTo(.5, .5);



        txTime.fill = 'white';
        txScore.fill = 'white';
        txBtStrWin.fill = 'white';
        txWin1.fill = 'white';
        txWin2.fill = '#bbb';
        txWin3.fill = '#bbb';
        txReplay.fill = '#ccc';


        txTime.font = 'VT323';
        txScore.font = 'VT323';
        txBtStrWin.font = 'VT323';
        txWin1.font = 'VT323';
        txWin2.font = 'VT323';
        txWin3.font = 'VT323';
        txReplay.font = 'VT323';


        txTime.fontSize = 36;
        txScore.fontSize = 36;
        txBtStrWin.fontSize = 36;
        txWin1.fontSize = 45;
        txWin2.fontSize = 40;
        txWin3.fontSize = 40;
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
