const mainTitle = document.getElementById('maintitle');
if(mainTitle){
    mainTitle.textContent = "Welcome to the DOM World!";
}

const paragraphs = document.getElementsByTagName('p');
for(let i=0; i<paragraphs.length;i++){
    paragraphs[i].style.color="blue";
}

const containerDiv = document.querySelector('div.container');
if(containerDiv){
    containerDiv.style.backgroundColor ="yellow";
}