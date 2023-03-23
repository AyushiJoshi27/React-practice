//Overriding
class Human {
  constructor(weapon) {
    this.weapon = weapon;
    this.health = 100;
  }
  receiveDamage() {
    this.health = this.health - 10;
  }
}
class Wizard extends Human {
  receiveDamage() {
    this.health = this.health - 5;
  }
}
const wizard = new Wizard("staff");
console.log(wizard.health);
wizard.receiveDamage();
console.log(wizard.health);

//overloading
console.log('Function overloading');
function funcONE(x,y) {
  console.log(x*y);
}
function funcONE(z) {
  console.log(z);
}

funcONE(5);
funcONE(5, 6);