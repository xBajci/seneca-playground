'use strict';

const seneca = require('seneca')({
    tag: 'rgb',
    log: 'silent'
})
    .use('mesh', {
        monitor: true,
        isbase: false,
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
    });
