import { w3cwebsocket as W3CWebSocket } from "websocket";

export const token = localStorage.getItem('GoGameToken')

console.log(token)

export const client = new W3CWebSocket('ws://172.104.137.176:41239');

client.onerror = function(err) {
  if(document.getElementById('errorWrapper') !== null) {
    document.getElementById('errorWrapper').style.display="flex";

  }
  console.log('Connection Error');
};

// if(client.readyState == 0) {
//   if(document.getElementById('loadingWrapper') !== null) {
//     document.getElementById('loadingWrapper').style.display="flex";

//   }
// }

// if(client.readyState != 0) {
//   if(document.getElementById('loadingWrapper') !== null) {
//     document.getElementById('loadingWrapper').style.display="none";

//   }
// }

function waitForSocketConnection(socket, callback){
  setTimeout(
      function () {
          if (socket.readyState === 1) {
            if(document.getElementById('loadingWrapper') !== null) {
              if(document.getElementById('loadingWrapper').style.display != "none") {
                document.getElementById('loadingWrapper').style.display="none";

              }
            }
              if (callback != null){
                  callback();
              }
          } else {
                if(document.getElementById('loadingWrapper') !== null) {
                  if(document.getElementById('loadingWrapper').style.display != "flex") {
                    document.getElementById('loadingWrapper').style.display="flex";

                  }
                }
              waitForSocketConnection(socket, callback);
          }

      }, 5); // wait 5 milisecond for the connection...
}

waitForSocketConnection(client);
client.onopen = function() {};

client.onclose = function(res) {

  console.log('echo-protocol Client Closed');
};
