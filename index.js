// Your code goes here

function changeText (){
    const newText = document.getElementById('text').innerHTML = 'This is really cool!';
    return newText;
};
document.addEventListener('DOMContentLoaded',changeText);