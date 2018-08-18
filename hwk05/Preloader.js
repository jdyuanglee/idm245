gameObj.Preloader = function (game) {};

gameObj.Preloader.prototype = {
    preload: function () {
        console.log("State - Preloader");
        this.stage.backgroundColor = 'black';

        //  Progress bar animation code
        this.preloadBg = this.add.sprite((920 - 262) / 2, (700 - 34) / 2, 'preloaderBg');
        this.preloadBar = this.add.sprite((920 - 225) / 2, (700 - 28) / 2, 'preloaderBar');
        this.load.setPreloadSprite(this.preloadBar);

        //  Load the intro screen
        this.load.image('background', 'img/background.png');
        this.load.image('brand', 'img/brand.png');
        this.load.image('win', 'img/win.png');
        this.load.image('error', 'img/error.png');

        //  Load the game screen
        this.load.image('background', 'img/background.png');
        this.load.image('asteriod_b1', 'img/asteriod_b1.png');
        this.load.image('asteriod_b2', 'img/asteriod_b2.png'); 
        this.load.image('asteriod_b3', 'img/asteriod_b3.png');
        this.load.image('asteriod_m1', 'img/asteriod_m1.png');
        this.load.image('asteriod_m2', 'img/asteriod_m2.png');
        this.load.image('asteriod_s1', 'img/asteriod_s1.png');
        this.load.image('asteriod_s2', 'img/asteriod_s2.png');
        this.load.image('asteriod_s3', 'img/asteriod_s3.png');
        this.load.image('asteriod_s4', 'img/asteriod_s4.png');
        this.load.image('heart', 'img/heart.png');
        this.load.image('bullet', 'img/bullet.png');
        this.load.image('arrows', 'img/arrows.png');



        //  Load the Google WebFont Loader script
        this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

        //  Load the SpaceShip
        this.load.spritesheet('boost', 'img/boost.png', 120, 120, 3);
        this.load.spritesheet('winShipBoost', 'img/winShipBoost.png', 240, 240, 3);
        this.load.spritesheet('spritesheet', 'img/spritesheet.png', 120, 120, 12);


        // Load temp buttons
        this.load.spritesheet('button', 'img/play_button.png', 135, 50);

    },
    create: function () {

        this.state.start('Main');


    }
};
