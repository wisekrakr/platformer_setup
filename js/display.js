/* David Damian 15/08/2019 */

/* This Display class contains the screen resize event handler and also handles
drawing colors to the buffer and then to the display. */

const Display = function(canvas) {

  this.buffer  = document.createElement("canvas").getContext("2d");
  this.context = canvas.getContext("2d");

  this.drawRectangle = function(object) {

    this.buffer.fillStyle = object.color;
    this.buffer.fillRect(Math.floor(object.x), Math.floor(object.y), object.width, object.height);

  };

  this.fill = function(color) {

    this.buffer.fillStyle = color;
    this.buffer.fillRect(0, 0, this.buffer.canvas.width, this.buffer.canvas.height);

  };

  this.render = function() { 
    
    this.context.drawImage(
      this.buffer.canvas, 
      0, 0, 
      this.buffer.canvas.width, this.buffer.canvas.height, 
      0, 0, 
      this.context.canvas.width, this.context.canvas.height); 
  };

  this.resize = function(width, height, height_width_ratio) {

    if (height / width > height_width_ratio) {

      this.context.canvas.height = width * height_width_ratio;
      this.context.canvas.width = width;

    } else {

      this.context.canvas.height = height;
      this.context.canvas.width = height / height_width_ratio;

    }

    this.context.imageSmoothingEnabled = false;

  };

};

Display.prototype = {

  constructor : Display

};
  