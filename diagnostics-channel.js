import diagnostics_channel from 'node:diagnostics_channel'

const channel = diagnostics_channel.channel('test');

function onMessage(message, name) {
    console.log('Received data', name, message)
}

diagnostics_channel.subscribe('test', onMessage);

if (channel.hasSubscribers) {
    channel.publish('Hello, world!');
    channel.publish({ name: "Test" });
}

if (diagnostics_channel.hasSubscribers('test')) {
    channel.publish('Another Message');
}

diagnostics_channel.unsubscribe('my-channel', onMessage);