const GameEngine = function(){

    this.gameEngine = {

        gameObjects: new Array(),
        to_be_removed:new Array(),

        /* Out of bounds Detection */
        addObject : function(object) {

            this.gameObjects.push(object);              
        },

        /* Player Movement */
        removeObject : function(object) {   

            this.gameObjects.pop(object);
            this.to_be_removed.push(object);
        },
        
        update : function(){
            
            for(let key in this.gameObjects){
                
                this.gameObjects[key].update();
            
            }
        },

        distanceBetweenObjects : function(object1, object2){
            let attackDistanceX = object1.x - object2.x;
            let attackDistanceY = object1.y - object2.y;

            return Math.hypot(attackDistanceX, attackDistanceY);
        },

        angleBetweenObjects : function(object1, object2){
            let attackDistanceX = object1.x - object2.x;
            let attackDistanceY = object1.y - object2.y;

            return Math.atan2(attackDistanceX, attackDistanceY);
        },

        collision : function(object1, object2){      

            if (this.distanceBetweenObjects(object1, object2) < 10) {
                return true;
            }else{
                return false;
            }
        },

        size : function(obj) {
            var size = 0, key;
            for (key in obj) {
                if (obj.hasOwnProperty(key)) size++;
            }
            return size;
        }
    }

    this.update = function() {
     
        this.gameEngine.update();
        
    };
}

GameEngine.prototype = { constructor : GameEngine };