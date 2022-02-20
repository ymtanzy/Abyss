'use strict';

/**
*
T h o m a s L h o e s t
-------------      ____________
*
**/

const socket = io('http://localhost:8080');
const oscAddresses = [
  '/ESP1/Capteur1',
  '/ESP1/Capteur2',
  '/ESP1/Capteur3',
  '/ESP1/Capteur4',
];

//---------------------------------
  // send

window.requestAnimationFrame(function update(t){

  let sine = ((Math.sin(t*0.001))+1)/2;

  socket.emit('fader', {
    address: '/fader',
    args: [0, sine]
  });

  socket.emit('fader', {
    address: '/fader',
    args: [1, sine]
  });

  socket.emit('fader', {
    address: '/fader',
    args: [2, sine]
  });

  //---------------------------------
  window.requestAnimationFrame(update);
});