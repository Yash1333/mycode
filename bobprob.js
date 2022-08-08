
function calculatebricks(num){
    
    let lowall=24;
    let hofwall=8;
    let thickness=0.6;
    let volumeofwall= lowall*hofwall*thickness;
    let volumneofbricks=24*12*8;
    let mortar=15;

    let noofbricks= (((100-mortar)/100)*volumeofwall*(100*100*100)/volumneofbricks);
    console.log(Math.ceil(noofbricks));
}
calculatebricks();
console.log(Math.ceil(10.9));

console.log(Math.round(10.33));
