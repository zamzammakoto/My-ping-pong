var toBePinged = [];

function pingPong (number){
   for (var index = 1; index <= number; index+=1){
       if(index % 15 === 0){
           toBePinged.push("pingpong");
       }
       else if(index % 5 === 0){
           toBePinged.push("pong");
       }
       else if(index % 3 === 0){
           toBePinged.push("ping");
       }
       else{
           toBePinged.push(index);
       }
   }
}
