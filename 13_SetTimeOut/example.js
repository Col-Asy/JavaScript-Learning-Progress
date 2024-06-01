// THe function follows an order of going into the Call Back Queue first
// From there it'll first wait for the call stack to get empty
// After the stack is empty, the function which comes frst in the call back queue, joins in the stack first
// And so on...

setTimeout(function(){
    console.log("Hello World")
},5000);

setTimeout(function(){
    console.log("Aur veeere");
},4000);

for(let i = 0; i < 10000 ; i++){
    console.log("Avada");
}