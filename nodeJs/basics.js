 function sayHello(name){
     console.log("Hello "+ name);
 }
 sayHello('Shalini');


 console.log(window);  //window is no defined in node

//globals
 var message ="Hii";
 console.log(global.message);  // it will be undefined

//module
console.log(module);

//Loading (require)

 const logger = require('./logger');
 console.log(logger);
 logger.log('message');


//path module

const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);

//os module
const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('Total Memory: '+ totalMemory);
console.log(`Total Memory: ${totalMemory}`);
console.log(`Total Memory: ${freeMemory}`);


//Events and Event Emmitter

const EventEmitter = require('events');
const emitter = new EventEmitter();

//Register a listner
 emitter.on('messsageLogged', function(){
   console.log('Listener called');
 });

//Raise an event
emitter.emit('messageLogged');

//HTTP Module
const http = require('http');
const server = http.createServer((req, res) =>{
    if(req.url ==='/'){
        res.write('Hello World');
        res.end();
    }

    if(req.url ==='/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});
server.on('connection', (socket) => {
    console.log('New connection...')
});
server.listen(3000);
console.log('Listening on port 3000...'); 

