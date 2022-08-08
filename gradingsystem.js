function printgradingsystem(score){

    if (score>=90){
        console.log("A");
    
    } else if(score>=80 &&score<90){
        console.log("B")
    } else if(score>=60 && score<80){
        console.log("C");

    }else if(score>=33 && score<60){
        console.log("D");

    }else {
        console.log("Fail");
    }
}
printgradingsystem(98);