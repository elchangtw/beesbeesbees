var ForagerBee = function() {
  Bee.call(this);

  this.age = 10;
  this.job = 'find pollen';
  //a color property inherited from bee that is set to yellow
  //a food property that is inherited from grub
  //an eat method that is inherited from grub
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
}