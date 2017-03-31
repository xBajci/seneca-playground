'use strict';

const seneca = require('seneca');

let start;

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
            ping: 'pong1'
        });
    })
    .add({
        role: 'status',
        cmd: 'time'
    }, (msg, reply) => {
        const ms = new Date() - start;
        reply(null, {
            time: ms
        });
    })
    .ready(() => {
        start = new Date();
        console.log('Service `status` is ready to serve.');
    });

const hello = seneca()
    .use('mesh', {
        listen: [
            { pin: 'role:hello' }
        ],
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
                active: false
            },
            guess: {
                active: false
            }
        }
    })
    .add({
        role: 'hello'
    }, (msg, reply) => {
        reply(null, {
            msg: 'ehllo'
        });
    })
    .ready(() => console.log('Service `hello` is ready to serve.'));
