Answer: 20 and a ReferenceError
The code demonstrates variable scoping in JavaScript: 
Variables declared with var are function-scoped (or global-scoped if declared outside a function) and not block-scoped. Therefore, y is accessible outside the if block, and console.log(y) successfully outputs 20.
Variables declared with let are block-scoped. This means x is only accessible within the if block where it was defined.
Attempting to access x outside its scope results in a ReferenceError, stopping further execution.
// 
const profile = {
    user: {
        details: {
            email: "test@mail.com"
        }
    }
};

console.log(profile?.user?.details?.email);
console.log(profile?.user?.details?.phone);
// test@mail.com
// undefined
// 
const user = {
  name: 'John Doe',
  // profile property is missing
};
console.log(user.profile?.phone); // Output: undefined