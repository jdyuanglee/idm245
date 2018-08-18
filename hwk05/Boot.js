var gameObj = {
  // Global variables are decleared here!
  gScore: 0,
  gTime: "01:20"
};

gameObj.Boot = function (game) {}; // Link to phaser project

gameObj.Boot.prototype = {
  preload: function () { // Preload all the images here
    console.log("State - Boot");
      this.load.image('preloaderBg', 'img/loading-bg.png');
      this.load.image('preloaderBar', 'img/loading-bar.png');
  },
  create: function () {
    this.state.start('Preloader');
  }
};
