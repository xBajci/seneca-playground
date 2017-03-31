'use strict';

const seneca = require('seneca')()
    .use('mesh', {
        // this is a base node
        isbase: true,
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
    .ready(() => console.log('Base is ready to serve.'));
