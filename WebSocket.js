webSocket = new WebSocket(url, protocols);
// This should use the URL scheme wss://

// The constructor will throw a SecurityError if the destination doesn't allow access. This may happen if you attempt to use an insecure connection

var exampleSocket = new WebSocket(
  'wss://www.example.com/socketserver',
  'protocolOne'
);

// On return, exampleSocket.readyState is CONNECTING. The readyState will become OPEN once the connection is ready to transfer data.

// If you want to open a connection and are flexible about the protocols you support, you can specify an array of protocols:

var exampleSocket = new WebSocket('wss://www.example.com/socketserver', [
  'protocolOne',
  'protocolTwo',
]);
// Once the connection is established (that is, readyState is OPEN), exampleSocket.protocol will tell you which protocol the server selected.

// Once you've opened your connection, you can begin transmitting data to the server. To do this, simply call the WebSocket object's send() method for each message you want to send:

exampleSocket.send("Here's some text that the server is urgently awaiting!");
// You can send data as a string, Blob, or ArrayBuffer.

// As establishing a connection is asynchronous and prone to failure there is no guarantee that calling the send() method immediately after creating a WebSocket object will be successful. We can at least be sure that attempting to send data only takes place once a connection is established by defining an onopen event handler to do the work:

exampleSocket.onopen = function (event) {
  exampleSocket.send("Here's some text that the server is urgently awaiting!");
};

// One handy thing you can do is use JSON to send reasonably complex data to the server.

// Send text to all users through the server
function sendText() {
  // Construct a msg object containing the data the server needs to process the message from the chat client.
  var msg = {
    type: 'message',
    text: document.getElementById('text').value,
    id: clientID,
    date: Date.now(),
  };

  // Send the msg object as a JSON-formatted string.
  exampleSocket.send(JSON.stringify(msg));

  // Blank the text input element, ready to receive the next line of text from the user.
  document.getElementById('text').value = '';
}

// WebSockets is an event-driven API; when messages are received, a message event is sent to the WebSocket object. To handle it, add an event listener for the message event, or use the onmessage event handler. To begin listening for incoming data, you can do something like this:

exampleSocket.onmessage = function (event) {
  console.log(event.data);
};

// When you/'ve finished using the WebSocket connection, call the WebSocket method close():

exampleSocket.close();
