import { client, token } from '../Socket.js'

const send = function (message, callback) {
    waitForConnection(function () {
        client.send(message);
        if (typeof callback !== 'undefined') {
          callback();
        }
    }, 1000);
};

const waitForConnection = function (callback, interval) {
    if (client.readyState === 1) {
        callback();
    } else {
       
        // optional: implement backoff for interval here
        setTimeout(function () {
            waitForConnection(callback, interval);
        }, interval);
    }
};

export default send;