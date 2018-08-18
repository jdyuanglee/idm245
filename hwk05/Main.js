gameObj.Main = function (game) {};

gameObj.Main.prototype = {
    create: function () {
        console.log('State - Main');
        //Add background image
        var spBackground = this.add.sprite(0, 0, 'background');

        //Add branding image
        var spBrand = this.add.sprite(this.world.centerX, 220, 'brand');
        spBrand.anchor.setTo(.5, .5);

        //Add button
        //The numbers given in parameters are the indexes of the frames, in this order: OVER, OUT, DOWN
        var btPlay = this.add.button(this.world.centerX, 450, 'button', this.playOnClick, this, 1, 0, 2);
        btPlay.anchor.setTo(.5, .5);
        var btHelp = this.add.button(this.world.centerX, 550, 'button', this.helpOnClick, this, 1, 0, 2);
        btHelp.anchor.setTo(.5, .5);

        //Add list graphics


        //Add text

        var timeStr = 'PLAY';
        var scoreStr = 'HELP';

        var txTimer = this.add.text(this.world.centerX, 450, timeStr);
        var txScore = this.add.text(this.world.centerX, 550, scoreStr);

        txTimer.anchor.setTo(.5, .5);
        txScore.anchor.setTo(.5, .5);

        txTimer.fontSize = 36;
        txScore.fontSize = 36;

        txTimer.font = 'VT323';
        txScore.font = 'VT323';

        txTimer.fill = 'white';
        txScore.fill = 'white';
    },
    customFunName: function () {

    },

    playOnClick: function () {
        console.log('Play button clicked');
        this.state.start('Play');

    },
    
    helpOnClick: function () {
        console.log('Play button clicked');
        this.state.start('Help');

    }
};
