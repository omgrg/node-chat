//Make connection
var socket = io.connect('http://localhost:3000');


//Query Dom

var messages = document.getElementById('messages');
var m = document.getElementById('m');
var btn = document.getElementById('send');


//Emit events

btn.addEventListener('click', function(){
   socket.emit('chat',{
       message: m.value
   });

});

//listen events

socket.on('chat', function(data){
    var liNode = document.createElement('Li');
    var textNode = document.createTextNode(data.message);

    liNode.appendChild(textNode);

    messages.appendChild(liNode);
    m.value = " ";
});