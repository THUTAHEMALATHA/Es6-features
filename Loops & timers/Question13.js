const loadingInterval = setInterval(()=> {console.log("loading...")},1000);
setTimeout(()=>{
    clearInterval(loadingInterval);
    console.log("Loaded Successfully")
},5000);