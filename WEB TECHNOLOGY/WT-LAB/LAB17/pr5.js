const os = require('os');


console.log(`OS Platform: ${os.platform()}`);
console.log(`OS Type: ${os.type()}`);
console.log(`OS Release: ${os.release()}`);
console.log(`CPU Architecture: ${os.arch()}`);
console.log(`Hostname: ${os.hostname()}`);


const totalMemGB = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2);
const freeMemGB = (os.freemem() / (1024 * 1024 * 1024)).toFixed(2);
console.log(`Memory: ${freeMemGB}GB free of ${totalMemGB}GB`);


const userInfo = os.userInfo();
console.log(`Current User: ${userInfo.username}`);
console.log(`Home Directory: ${os.homedir()}`);


let url = require('url');
let adr = 'http://localhost:8080/default.htm?year=2017&month=february';
let q = url.parse(adr, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

let qdata = q.query;
console.log(qdata.month);



const { setTimeout, setInterval, setImmediate } = require('timers');

console.log('Starting timers...');


setTimeout(() => {
  console.log('This runs after 1 second');
}, 1000);

let counter = 0;
const interval = setInterval(() => {
  counter++;
  console.log(`Interval tick ${counter}`);
  if (counter >= 3) clearInterval(interval);
}, 1000);


setImmediate(() => {
  console.log('This runs in the next iteration of the event loop');
});

console.log('Timers scheduled');