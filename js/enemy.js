const Enemy = function(vel_x, vel_y, game, gameEngine) {

    this.tag        = "Enemy " + Math.random();
    this.color      = "#000000";
    this.width      = 8;
    this.height     = 8;
    this.velocity_x = vel_x;
    this.velocity_y = vel_y; 
    this.x          = Math.random() * 128;
    this.y          = Math.random() * 72;
    this.game       = game;
    this.gameEngine = gameEngine;

    this.gameEngine.gameEngine.addObject(this);
    
  };
  
  Enemy.prototype = {
  
    constructor : Enemy,

    update: function() {
  
        this.x += this.velocity_x; 
        this.y += this.velocity_y; 
       
        if(this.game.world.outOfBounds(this)){
            this.game.gameEngine.removeObject(this);
            console.log("bliep")
        }  

    },    
  
  };  
  
  
    
    
  
 