const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const mergedArray = [...arr1, ...arr2];
// 
function sum(...nums) {
  return nums.reduce((total, currentNum) => total + currentNum, 0);
}
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(10, 20)); 