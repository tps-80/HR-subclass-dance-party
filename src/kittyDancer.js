function KittyDancer(top, left, timeBetweenSteps){
  BlinkyDancer.call(this, top, left, timeBetweenSteps)
  this.$node = $('<span class="kitty"></span>');
  this.state = true;

  this.setPosition(top, left);
}



KittyDancer.prototype = Object.create(Dancer.prototype);
KittyDancer.prototype.constructor = KittyDancer;


KittyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  if(this.state){
    this.state = !this.state
    this.$node.animate({
      left: "+=50",
    }, this.timeBetweenSteps,function(){});
  }else{
    this.state = !this.state
    this.$node.animate({
      left: "-=50",
    }, this.timeBetweenSteps,function(){});
  }

};

