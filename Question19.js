// 1.
a) console.log(`5+7 = ${5+7}`);
b) const multiLineString=`This is a first line.
This is a second line.
This is a last line.`
console.log(multiLineString);
c) const firstName="John";
   const SecondName="Doe";
   const fullName=`${firstName}+${SecondName}`;
   console.log(fullName);
//2.
a) const square = n=>n*n;
b) The code logs undefined because arrow functions do not bind their own this value; instead, they inherit this from their surrounding lexical scope. 
In the provided code: 
The test method is defined using an arrow function inside the obj object literal.
The surrounding scope for the arrow function is the global scope (or module scope in modern JavaScript environments), not the obj object itself.
In the global scope, this.value is undefined.
When obj.test() is called, the arrow function executes using the inherited global this, which does not have a value property, resulting in undefined being logged.
c) const obj = {
  value: 50,
  test: function() {
    console.log(this.value);
  }
};
obj.test();
// 3
a) const productcopy={...product};
b) const mergedobjects={...a, ...b};
c) function maxValue(...nums) {return Math.max(...nums);}
// 4
a)  const [a, b] = arr;
b)  const { brand } = laptop;
c) const address = info?.user?.address;
// 5
a) 3
b) ReferenceError
c)To prevent accidental reassignment and improve code readability/predictability
// 6
a)let speed = (Kmph >60)?"Fast":"Normal";
b)let status = (age >= 18) ? "Adult" : "Minor";
c) let sign = (num > 0) ? "Positive" : (num === 0) ? "Zero" : "Negative";
// 7
a)const nums = [1, 2, 3];
  const updatedNums = [...nums, 4, 5];
  result array is [1,2,3,4,5];

b)const a=["x","y"];
 const b=["z"];
 result array is ["x","y","z"] ;
c) function printNames(...names) {
  return names;
}
printNames("A", "B", "C");
The function returns the array ["A", "B", "C"].
// 8
a) const { id, status } = user;
b) const user = { id, role };
c)  const newObject = { property: 'value', newMethod() { console.log('Method executed'); } };
// 9
a)const today = \`Today's date is: \${new Date().toDateString()}`\;
  b)  const message = \`Hello \${NAME}, your score is \${SCORE}/100`\;

// 10
a) const add = (a, b) => a + b;
b)const isAdult = (age) => age >= 18;
c) const double = (num) => num * 2;
// 11
a)const clonedArray = [...originalArray];
b)const newArray = [100, ...originalArray];
c)const mergedObject = {...object1, ...object2, propertyToOverride: newValue};
// 12
a)user.address.city
b)user .job?.title
c) user.nonExistent?.property

