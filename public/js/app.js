var socket = io();

socket.on('connect', function(){
  console.log('Connected to socket.io server');
});

socket.on('message', function(message) {
  console.log('New message:');
  console.log(message.text);

console.log(message);
  jQuery('.messages').append("<p>" + message.text  + "  : <strong>" + moment.utc(message.timestamp).local().format("h:m a") + "</strong> </p>");
});

socket.emit('message', {
  text: 'This is message'
});


//handles submitting of new message

var $form = jQuery("#message-form");

$form.on('submit', function(event){
  event.preventDefault();

  var $message = $form.find('input[name=message]');

  socket.emit('message', {
    text: $message.val()
  });

   $message.val('');
});
