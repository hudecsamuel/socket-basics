var socket = io();
var room = getQueryVariable('room');
var name = getQueryVariable('name') || 'Annonymous';

jQuery('.room-title').text(room);

socket.on('connect', function(){
  console.log('Connected to socket.io server');
  console.log(name + ' joined '+ room +' room.');
  socket.emit('joinRoom', {
    name: name,
    room: room
  });
});

socket.on('message', function(message) {
  var $messages = jQuery('.messages');
  var $message = jQuery('<li class="list-group-item"></li>');
  console.log('New message:');
  console.log(message.text);

console.log(message);

  $message.append('<p><strong>' + message.name + ' ' + moment.utc(message.timestamp).local().format("h:m a") + "</strong> </p>")
  $message.append("<p>" + message.text  + " </p>");
  $messages.append($message);
});

socket.emit('message', {
  name: name,
  text: 'This is message'
});


//handles submitting of new message

var $form = jQuery("#message-form");

$form.on('submit', function(event){
  event.preventDefault();

  var $message = $form.find('input[name=message]');

  socket.emit('message', {
    name: name,
    text: $message.val()
  });

   $message.val('');
});
