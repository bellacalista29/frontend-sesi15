// let add = function (x,y) {
//     return x + y;
// }

let add = (x,y) => {return x + y};

console.log(add(7,13));

let numbers = [2,1,3];
numbers.sort(function(a,b) {
    return b-a;
});

let sortNumber = numbers.sort((a,b) => a-b);
console.log(sortNumber);

let names = ['Tofan', 'Rahmat', 'Veve'];
let nameLength = names.map(name => name.length);
console.log(nameLength);