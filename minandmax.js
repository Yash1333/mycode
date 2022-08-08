function findminandmax(array){
    let min= Number.MAX_VALUE;
    let max= Number.MIN_VALUE;
    

    for(let i=0;i<array.length;i++){
      if(array[i]<min){
        min=array[i];
      }
      if (array[i]>max){
        max=array[i];
      }

    }
    console.log("Min:"+min);
    console.log ("MAX:"+max);
}
 findminandmax([2,3,15,16]);
