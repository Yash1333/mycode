// function printmessage(age){
//     if(age<18){
//         console.log("you cannot vote");
        

//         } else ( age>=18)
//             console.log("you can vote");
//         }
    

// printmessage(19);
// printmessage(13);
function isvotingage(age){

   if(age>=18){

    return true;
   } else{
    return false;
   }

    
}
console.log(isvotingage(20));
console.log(isvotingage(13));

function checktheorder(a,b,c){
    if (a>b &&a>c){
    console.log("a is bigger than a,c");
    }else if ( b>a && b>c){
        console.log("b+  is the output")
    } else{
        console.log("c is the output");
    }
    
}
checktheorder (1,2,3);
chechtheorder(3,2,1);
