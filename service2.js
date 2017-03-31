'use strict';

const seneca = require('seneca');

const status = seneca()
    .use('mesh', {
        pin: {
            role: 'status'
        },
        discover: {
            defined: {
                active: false
            },
            custom: {
                active: false
            },
            registry: {
                active: false
            },
            multicast: {
                active: true
            },
            guess: {
                active: false
            }
        }
    })
    .add({
        role: 'status',
        cmd: 'ping'
    }, (msg, reply) => {
        reply(null, {
            ping: 'pong2'
        });
    })
    .ready(() => {
        console.log('Service `status 2` is ready to serve.');
    });
