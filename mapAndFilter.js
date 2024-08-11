//? given an array -> return a new array with every value multiplied by 2

const input = [1,2,3,4,5];


//! Normal solution
const ans1 = [];

for(let i = 0;i<input.length;i++){
    ans1[i] = input[i] *2;
}

console.log(ans1);


//! map solution
const transform = (i)=>{
    return i*2;
}
const ans2 = input.map(transform);
console.log(ans2)


//? given an array -> return all the even values form it


const even = input.filter((num)=>{
    return num % 2 == 0;
})

console.log(even)