// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top,left);
  this.step();
  this.top = top;
  this.left = left;

};

Dancer.prototype.killStep = function(){
  clearTimeout(this.q);
}

Dancer.prototype.step =  function() {

  this.q = setTimeout(this.step.bind(this), this.timeBetweenSteps);

};




Dancer.prototype.setPosition =  function() {
// Dancer.prototype.setPosition =  function(top, left) {
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};