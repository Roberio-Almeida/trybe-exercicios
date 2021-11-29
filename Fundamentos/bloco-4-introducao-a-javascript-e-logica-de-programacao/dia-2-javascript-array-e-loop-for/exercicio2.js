let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* exercise 1
for(let i of numbers) {
    console.log(i);
}

exercise 2
let sum = 0;
for(let i of numbers) {
    sum = sum + i;
}
console.log(sum);

exercise 3 e 4
let sum = 0;
for(let i of numbers) {
    sum = sum + i / numbers.length;
} if (sum > 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}

exercise 5
let biggest = 0;
for (let i = 0; i < numbers.length; i+=1) {
   if (numbers[i] > biggest) {
    biggest = numbers[i];
   }
}
console.log(biggest);

exercise 6
let odd = 0;
for(let i = 0; i < numbers.length; i+=1) {
    if (numbers[i] % 2 > 0) {
        odd+=1;
    }
} 
    if (odd > 0) {
        console.log(odd);
    }
    else {
        console.log("nenhum valor ímpar encontrado");
}

exercise 7
let lowest = numbers[0];
for(let i = 0; i < numbers.length; i+=1){
    if(numbers[i] < lowest){
        lowest = numbers[i];   
    }
}
console.log(lowest);

exercise 8 e 9*/

let oneTo25 = [];
for(let i = 1; i <= 25; i+=1) {
    oneTo25.push(i / 2);
}
console.log(oneTo25);