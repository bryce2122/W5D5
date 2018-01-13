Function.prototype.myBind = function myBind(object) {
  this.apply(object);
};


class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {
   console.log("Turning on " + this.name);
};

const lamp = new Lamp();

turnOn(); // should not work the way we want it to


const myBoundTurnOn = turnOn.myBind(lamp);
