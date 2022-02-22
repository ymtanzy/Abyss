'use strict';

/*
____ _ _____ Abyss
**/


const easymidi = require('easymidi');
const colors = require('colors/safe');
const osc = require('node-osc');

const output = new easymidi.Output('Abyss', true);

var oscServer = new osc.Server(5555, '192.168.12.101', () => {
  console.log(colors.green('*************'));
  console.log(colors.blue('*** Abyss ***'));
  console.log(colors.green('*************'));
});

oscServer.on('message', function (msg) {
  //console.log(`Message: ${msg}`);
  //oscServer.close();

  output.send('cc', {
    controller: msg[0],
    value: msg[1],
    channel: 0
  })
});

/* setInterval(()=>{

  let t = Date.now();
  let frequency = 0.0001;
  let amplitude = 127;
  let sine = 0;

  for (let i = 0; i < 16; i++) {
    sine = Math.floor(((Math.sin(t*frequency*i)*amplitude)+amplitude)/2);
    output.send('cc', {
      controller: i,
      value: sine,
      channel: 0
    })
  }

}, 10);
 */
/* setInterval(()=>{

  for (let i = 0; i < 16; i++) {
    output.send('cc', {
      controller: i,
      value: Math.random()*127,
      channel: 0
    })
  }

}, 2000); */