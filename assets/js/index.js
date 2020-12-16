/*
//task1 
let a=[1,2,3,4,5,6,7,8,9];
function sumEvenElement () {
    let sum = 0;
    for (let i=0; i<=a.length; i+=2) {
        sum += a[i]; 
    }
    console.log(sum);
}
sumEvenElement (a);
*//*
//task2
let a=[1,2,3,4,5,6,7,8,9,1,2,3,4];
let b=[1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,14,15];
function sortArray () {
 let c = a.concat(b);
 c.sort(); 
 let i = c.length-1;
    while (i>0) {
        (c[i] == c[i-1]) ? c.splice (i,1) : i--;
    }
    return c;
}
console.log(sortArray(a,b));  
*/
//task3
let stroka = 'dsfds rfgdr hdfgf';
function camalCase (stroka) {
    let arr1 = stroka.split(" ");
    let i = arr1.length-1;
    /*while (i>0) {
    let test = arr1[i];
    test[0].toUpperCase;
    i--;
    }*/
    let s = arr1[0].join('');
    alert (s);
    console.log(arr1);
}
camalCase (stroka);