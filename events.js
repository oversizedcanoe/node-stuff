import EventEmitter from 'node:events'

class MyEmitter extends EventEmitter
{

}

const myEmitter = new MyEmitter();

myEmitter.on('event1', (arg1, arg2) => {
    console.log('event1 occurred', arg1, arg2);
})

myEmitter.emit('event1', 'hello', 'goodbye');


myEmitter.once('event2', () => {
    console.log('event2 occurred');
})

myEmitter.emit('event2');
myEmitter.emit('event2'); // nothing prints
myEmitter.emit('event2'); // nothing prints