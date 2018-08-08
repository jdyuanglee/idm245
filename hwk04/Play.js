gameObj.Play = function (game) {};

gameObj.Play.prototype = {
    create: function () {
        console.log('State - Play');

        //Add background image
        var spBackground = this.add.sprite(0, 0, 'background');


        // Add walking mummy
        var spSpaceship2 = this.add.sprite(300, 600, 'boost');


        //  Here we add a new animation called 'walk'
        //  Because we didn't give any other parameters it's going to make an animation from all available frames in the 'mummy' sprite sheet
        var boost = spSpaceship2.animations.add('boost');

        //  And this starts the animation playing by using its key ("walk")
        //  30 is the frame rate (30fps)
        //  true means it will loop when it finishes
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
        var btPlay3 = this.add.button(800, 300, 'button', this.backFun, this, 1, 0, 2);
        btPlay1.anchor.setTo(.5, .5);
        btPlay2.anchor.setTo(.5, .5);
        btPlay3.anchor.setTo(.5, .5);



        //Add text
        var timeStr = '01:20';
        var scoreStr = '1200';
        var btStrWin = 'WIN';
        var btStrLose = 'LOSE';
        var btStrBack = 'BACK';

        var txTimer = this.add.text(this.world.centerX, 50, timeStr);
        var txScore = this.add.text(100, 670, scoreStr);
        var txBtStrWin = this.add.text(800, 150, btStrWin);
        var txBtStrLose = this.add.text(800, 225, btStrLose);
        var txBtStrBack = this.add.text(800, 300, btStrBack);

        txTimer.anchor.setTo(.5, .5);
        txScore.anchor.setTo(.5, .5);
        txBtStrWin.anchor.setTo(.5, .5);
        txBtStrLose.anchor.setTo(.5, .5);
        txBtStrBack.anchor.setTo(.5, .5);


        txTimer.fill = 'white';
        txScore.fill = 'Red';
        txBtStrWin.fill = 'white';
        txBtStrLose.fill = 'white';
        txBtStrBack.fill = 'white';

        txTimer.font = 'Orbitron'; //space here is space
        txScore.font = 'VT323'; //space here is space
        txBtStrWin.font = 'VT323';
        txBtStrLose.font = 'VT323';
        txBtStrBack.font = 'VT323';

        txTimer.fontSize = 36;
        txScore.fontSize = 50;
        txBtStrWin.fontSize = 36;
        txBtStrLose.fontSize = 36;
        txBtStrBack.fontSize = 36;


        // end createText
    },
    customFunName: function () {

    },

    winnerFun: function () {
        console.log('Win button clicked');
        this.state.start('Win');
    },

    loserFun: function () {
        console.log('Lose button clicked');
        this.state.start('Lose');
    },
    backFun: function () {
        console.log('Back button clicked');
        this.state.start('Main');
    }
};
