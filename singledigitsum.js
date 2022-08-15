


/////
function tofindthesum(num){

    const numStr=num.toString();

    if(numStr.length==1){
        return numStr;
    }
    let sum=0;
    for(i=0;i<numStr.length;i++){
        sum+=Number(numStr[i]);
    }
    if(sum>9){
        tofindthesum(sum);
    }else{
        console.log(sum);

    }
}
tofindthesum(1234);

//////////////////
function tofindthesums(num){
const numStr=num.toString();
if(numStr==1){
    return numStr;
}let sum=0
for(i=0;i<numStr.length;i++){
    sum+=Number(numStr[i]);

}
if (sum>9){
    tofindthesums(sum);
}
else{
    console.log(sum);
}

}
tofindthesums(6789);
