/* David Damian 15/08/2019 */

const Game = function(gameEngine) {  

  this.world = {
    
    tag : "World",
    background_color:'#e3e3e3',

    friction:0.8,
    gravity:1,

    player:new Player(this, gameEngine),  
    enemy:new Enemy(2,0,this, gameEngine),      

    height:144,
    width:256,  

    /* Out of bounds Detection */
    outOfBounds:function(object) {
 
      if(object.x < 0) {
        object.x = 0; 
        object.velocity_x = 0;        

      }else if(object.x + object.width > this.width) { 
        object.x = this.width - object.width; 
        object.velocity_x = 0;         
      }

      if (object.y < 0) { 
        object.y = 0; 
        object.velocity_y = 0;        

      }else if (object.y + object.height > this.height) {
        object.jumping = false; 
        object.y = this.height - object.height; 
        object.velocity_y = 0;       
      }      
    },

   
    update:function() {      

      for(let key in gameEngine.gameEngine.gameObjects){
        
        if(gameEngine.gameEngine.gameObjects[key] instanceof Enemy){
          let enemy = gameEngine.gameEngine.gameObjects[key];

          let colliding = gameEngine.gameEngine.collision(
            this.player, enemy
            );

          if(colliding){
            console.log("bliep");
            gameEngine.gameEngine.removeObject(enemy);
          }
        }        
      }
    }
  };

  this.update = function() {

    this.world.update();
   
    
  };

};

Game.prototype = { constructor : Game };



  