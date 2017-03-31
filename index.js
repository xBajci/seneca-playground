'use strict';

const client = require('seneca')()
    .use('mesh', {
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
    .ready(run);

function run() {
    client.act({
        role: 'status',
        cmd: 'time'
    }, function (err, result) {
        if (err) return console.error(err);
        console.log(result);
    });

    client.act({
        role: 'hello'
    }, function (err, result) {
        if (err) return console.error(err);
        console.log(result);
    });

    // test load balancer
    [...Array(100)].forEach(() => {
        client.act({
            role: 'status',
            cmd: 'ping'
        }, function (err, result) {
            if (err) return console.error(err);
            console.log(result);
        });
    });
}
