const Player = function(game, gameEngine) {

  this.tag        = "Player";
  this.color      = "#ff0000";
  this.width      = 8;
  this.height     = 8;
  this.jumping    = true;
  this.velocity_x = 0;
  this.velocity_y = 0; 
  this.x          = 100;
  this.y          = 0;
  this.game       = game;
  this.gameEngine = gameEngine;
  
  this.gameEngine.gameEngine.addObject(this);
};

Player.prototype = {

  constructor : Player,

  jump:function() {

    if (!this.jumping) {

      // Change color with every jummp
      this.color = "#" + Math.floor(Math.random() * 16777216).toString(16);
      if (this.color.length != 7) {

        this.color = this.color.slice(0, 1) + "0" + this.color.slice(1, 6);

      }

      this.jumping = true;
      this.velocity_y -= 20;

    }

  },

  moveLeft:function()  { this.velocity_x -= 0.3; },
  moveRight:function() { this.velocity_x += 0.3; },


  update:function() {

    this.velocity_y += this.game.world.gravity;

    this.x += this.velocity_x *= this.game.world.friction;
    this.y += this.velocity_y *= this.game.world.friction;

    this.game.world.outOfBounds(this);  

  
  } 

};