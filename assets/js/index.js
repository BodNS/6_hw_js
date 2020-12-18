/*
//task1
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function sumEvenElement(a) {
  let sum = 0;
  for (let i = 0; i <= a.length-1; i += 2) {
    sum += a[i];
  }
  return sum;
}
console.log(
  sumEvenElement(a)
); */
/*
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

/*
//task3
let stroka = "function camal case";
function camalCase(stroka) {
  let arr1 = stroka.split(" ");
  let i = arr1.length - 1;
  while (i >= 1) {
    let s = arr1[i];
    s = s[0].toUpperCase() + s.slice(1);
    arr1[i] = s;
    i--;
  }
  return arr1.join("");
}
console.log(camalCase(stroka));
*//*
//task4
let chislo = prompt("Введите число");
let razriadnost = parseInt(prompt("Введите разрядность числа"));
function razriadnostChisla(chislo, razriadnost) {
  let flag = false, i = 1;
  if (chislo<0) {
    chislo = String(Math.abs(chislo));
    flag = true;
  }
  let dlinaChisla = razriadnost-chislo.length;
    while (i <= dlinaChisla) {
    chislo = "0" + chislo;
    i++;
  }
  if (flag == true) {
    chislo = '-'+chislo;
  }
  return chislo;
}
console.log(razriadnostChisla(chislo, razriadnost));
*//*
//task5
let worker = {
  firstName: "John",
  lastName: "Smith",
  profession: "Programmer",
  workExperience: 7,
  oklad: 1000,
  visluga: function () {
    (this.workExperience>8) ? this.oklad += this.oklad*0.1 : 
      (this.workExperience>5) ? this.oklad += this.oklad*0.05 : this.oklad*1;
    console.log(`${this.firstName} ${this.lastName} получает ${this.oklad}$`); 
  }
}
worker.visluga();
*/