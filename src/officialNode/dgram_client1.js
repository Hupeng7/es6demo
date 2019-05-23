"use strict";

const dgram = require('dgram');
// const socket = dgram.createSocket('udp6');
// socket.bind(41234, () => {
//     socket.setMulticastInterface('::%eth1');
// })

// socket.bind(41234, () => {
//     socket.setMulticastInterface('::%2');
// });

const socket = dgram.createSocket('udp4');
socket.bind(1234, () => {
    socket.setMulticastInterface('10.0.0.2');
})
















