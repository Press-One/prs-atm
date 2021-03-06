'use strict';

const path = require('path');

module.exports = {

    mode: 'production',

    target: [
        'node14',
        'electron12-main',
    ],

    entry: './main.js',

    output: {
        libraryTarget: 'commonjs',
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },

    resolve: {
        extensions: ['.js', '.json', '.node'],
        alias: {
            '@sentry/node': false,
            'fast-geoip': false,
            'ioredis': false,
            'mailgun-js': false,
            'mysql2/promise': false,
            'node-mailjet': false,
            'public-ip': false,
            'telesignsdk': false,
            'twilio': false,
            'winston-papertrail-mproved': false,
            'winston': false,
        }
    },

    externals: [
        /cardinal/, // mysql
        { got: 'commonjs got' }, // public-ip
    ],

    ignoreWarnings: [
        warning => {
            return ((warning?.loc?.start?.line === 84 // utilitas.event
                && warning?.loc?.start?.column === 20
                && warning?.loc?.end?.line === 84
                && warning?.loc?.end?.column === 52));
        },
    ],

    node: {
        __dirname: false,
        __filename: false,
    },

};
