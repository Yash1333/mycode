//temperature outside problem

function cangotopark(temp,israining){
    if(temp>=20 && temp<=25 && israining==false){
        console.log("can go to park");

    }
    else if(temp>=18 && temp<=20 && israining==true){
        console.log("you cannot go");
    }
    else{
        console.log("invalid input");
    }

}
cangotopark(20,false)
////////////////

function canplay(temp,rainiscoming){

    if (temp>=25&&temp<=35&&rainiscoming==false){
        console.log("you can go have fun");

    } 
    else if(temp>=20&&temp<=24&&rainiscoming==true){
        console.log("you cannot go and stay put");
    }
    else{
        console.log("you have entered wrong value to check");
    }

} canplay(26,false);
canplay(20,true);