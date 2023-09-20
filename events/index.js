// TODO 1
// import EventEmitter class
const { EventEmitter } = require("events");

const birthdayEventListener = (name) => {
    console.log(`Happy birthday ${name}!`);
  }
   
// TODO 2
// set event emitter
const myEmitter = new EventEmitter();
   
// TODO 3
// set listener on "birthday" event
myEmitter.on("birthday", birthdayEventListener);
   
// TODO 4
// emit "birthday" event
myEmitter.emit("birthday", "Arya");