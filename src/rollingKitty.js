function rollingKitty(top, left, timeBetweenSteps){
  BlinkyDancer.call(this, top, left, 100)
  this.$node = $('<span class="rollingKitty"></span>');
  this.setPosition(top, left);
  this.top = top;
  this.left = left;
  this.t = 0; //animation helper variable

}



rollingKitty.prototype = Object.create(Dancer.prototype);
rollingKitty.prototype.constructor = rollingKitty;


rollingKitty.prototype.step = function() {
  Dancer.prototype.step.call(this);
    this.t += 0.05;

    var r = 100;
    var xcenter = this.top;
    var ycenter = this.left;
    var newLeft = Math.floor(xcenter + (r * Math.cos(this.t)));
    var newTop = Math.floor(ycenter + (r * Math.sin(this.t)));
    this.$node.animate({
        top: newTop,
        left: newLeft,
    }, 100, function() {
    });
};

