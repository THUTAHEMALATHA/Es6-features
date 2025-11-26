function displayMessage(){
    console.log(`Hello, ${username}!`);
}
function getUserInput(callback){
    setTimeout(()=>{
    const username="Alice";
    callback(username);
    },1000)
}
getUserInput(displayMessage);