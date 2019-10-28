var HoneyMakerBee = function() {
  Bee.call(this);

  this.age = 10;
  this.job = 'make honey';
  //a color property inherited from bee that is set to yellow
  //a food property that is inherited from grub
  //an eat method that is inherited from grub
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
}

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
}
