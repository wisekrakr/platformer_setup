/* David Damian 15/08/2019 */


/*  The load listener ensures that this code will not
execute until the document has finished loading and I have access to all of my classes. */
window.addEventListener("load", function(event) {

    "use strict";

    let keyDownUp = function(event) {

        controller.keyDownUp(event.type, event.keyCode);

    };
    
      
    let render = function() {
  
        display.fill(game.world.background_color);// Clear background to game's background color.
   
        // Give gameobjects a filled rectangle
        for(let key in gameEngine.gameEngine.gameObjects){
            display.drawRectangle(gameEngine.gameEngine.gameObjects[key]);
        }
               
        display.render();  
    };
  
    let update = function() {
         
        // Player Controls
        if (controller.left.active)  { game.world.player.moveLeft();  }
        if (controller.right.active) { game.world.player.moveRight(); }
        if (controller.up.active)    { game.world.player.jump(); controller.up.active = false; }
    
        // document.onmousemove = function(mouse){
        //     let mouseX = mouse.clientX;
        //     let mouseY = mouse.clientY;

        //     game.world.player.x = mouseX;
        //     game.world.player.y = mouseY;
        // }

        // Remove gameobjects
        for(let key in gameEngine.gameEngine.to_be_removed){   
            
            display.context.clearRect(
                gameEngine.gameEngine.to_be_removed[key].x,
                gameEngine.gameEngine.to_be_removed[key].y,
                gameEngine.gameEngine.to_be_removed[key].width,
                gameEngine.gameEngine.to_be_removed[key].height
            )

            gameEngine.gameEngine.to_be_removed.pop(key);
        }

        game.update(); 
        gameEngine.update();        
      
    };

    let resize = function(event) {

      display.resize(
          document.documentElement.clientWidth - 32, 
          document.documentElement.clientHeight - 32, 
          game.world.height / game.world.width
      );
      display.render();

    };

    
  
    // Initialize Components
  
    /* The controller handles user input. */
    let controller = new Controller();    
    /* The gameEngine will help run the game smooth from the background */
    let gameEngine = new GameEngine();
    /* The game will hold our game logic. */
    let game = new Game(gameEngine);
    /* The engine is where the above three sections can interact. */
    let engine = new Engine(1000/60, render, update);
    /* The display handles window resizing, as well as the on screen canvas. */
    let display = new Display(document.querySelector("canvas")); 

    /* Every pixel must be the same
    size as the world dimensions to properly scale the graphics. */
    display.buffer.canvas.height = game.world.height;
    display.buffer.canvas.width = game.world.width;
  
    window.addEventListener("resize",  resize);
    window.addEventListener("keydown", keyDownUp);
    window.addEventListener("keyup",   keyDownUp); 

    resize(); 

    engine.start();        
});
  