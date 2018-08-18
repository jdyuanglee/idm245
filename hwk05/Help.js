gameObj.Help = function (game) {};

gameObj.Help.prototype = {
    create: function () {
        console.log('State - Help');

        //Add background image
        var spBackground = this.add.sprite(0, 0, 'background');

        // Add walking mummy
        var spWinShipBoost = this.add.sprite(200, 450, 'winShipBoost');
        var boost = spWinShipBoost.animations.add('winShipBoost');
        spWinShipBoost.animations.play('winShipBoost', 12, true);

        //  Load the Graphics
        var spHeart = this.add.sprite(200, 125, 'heart');
        spHeart.anchor.setTo(.5, .5);
        var spAsteriod_s2 = this.add.sprite(200, 225, 'asteriod_s1');
        spAsteriod_s2.anchor.setTo(.5, .5);
        var spBullet = this.add.sprite(200, 335, 'bullet');
        spBullet.anchor.setTo(.5, .5);
        var spArrows = this.add.sprite(410, 450, 'arrows');
        spArrows.anchor.setTo(.5, .5);
        spWinShipBoost.scale.setTo(0.5, 0.5);
        spWinShipBoost.anchor.setTo(.5, .5);
        this.load.spritesheet('button', 'img/play_button.png', 135, 50);
        var btPlay = this.add.button(this.world.centerX, 650, 'button', this.actionOnClick, this, 1, 0, 2);
        btPlay.anchor.setTo(.5, .5);


        //  Add text
        var helpStr1 = 'You will have three lives';
        var helpStr3 = 'Avoid the asteriods';
        var helpStr3 = 'Press space to shoot';
        var helpStr4 = 'Use       to steer';
        var helpStr5 = 'Survive in 2 mins to win';
        var timeStr = '02:00';
        var btStrBack = 'BACK';

        var txHelp1 = this.add.text(280, 100, helpStr1);
        var txHelp2 = this.add.text(290, 205, helpStr3);
        var txHelp3 = this.add.text(290, 315, helpStr3);
        var txHelp4 = this.add.text(290, 425, helpStr4);
        var txHelp5 = this.add.text(290, 525, helpStr5);
        var txTimer = this.add.text(200, 550, timeStr);
        var txBtStrBack = this.add.text(this.world.centerX, 650, btStrBack);

        txBtStrBack.anchor.setTo(.5, .5);
        txTimer.anchor.setTo(.5, .5);

        txTimer.fill = 'white';
        txHelp1.fill = 'white';
        txHelp2.fill = 'white';
        txHelp3.fill = 'white';
        txHelp4.fill = 'white';
        txHelp5.fill = 'white';
        txTimer.fill = 'white';
        txBtStrBack.fill = 'white';

        txHelp1.font = 'VT323';
        txHelp2.font = 'VT323';
        txHelp3.font = 'VT323';
        txHelp4.font = 'VT323';
        txHelp5.font = 'VT323';
        txTimer.font = 'Orbitron';
        txBtStrBack.font = 'VT323';

        txTimer.fontSize = 36;
        txHelp1.fontSize = 45;
        txHelp2.fontSize = 45;
        txHelp3.fontSize = 45;
        txHelp4.fontSize = 45;
        txHelp5.fontSize = 45;
        txTimer.fontSize = 25;
        txBtStrBack.fontSize = 36;



        // end createText
    },
    actionOnClick: function () {
        console.log('Back button clicked');
        this.state.start('Main');
    }
};
