function rollingKitty(top, left, timeBetweenSteps){
  BlinkyDancer.call(this, top, left, timeBetweenSteps)
  this.$node = $('<span class="rollingKitty"></span>');
  this.setPosition(top, left);

}



rollingKitty.prototype = Object.create(Dancer.prototype);
rollingKitty.prototype.constructor = rollingKitty;


rollingKitty.prototype.step = function() {
  // Dancer.prototype.step.call(this);
  // if(this.state){
  //   this.state = !this.state
  //   this.$node.animate({
  //     left: "+=50",
  //   }, this.timeBetweenSteps,function(){});
  // }else{
  //   this.state = !this.state
  //   this.$node.animate({
  //     left: "-=50",
  //   }, this.timeBetweenSteps,function(){});
  // }

};

