const paragraph = document.querySelector('p').innerHTML
console.log(paragraph);

const allParagraph = document.querySelectorAll('p')
console.log(allParagraph);

const secondparagraph=document.getElementById('two')
console.log(secondparagraph);

const thirdparagragh=document.getElementsByClassName('third')
console.log(thirdparagragh);


document.querySelector('button').addEventListener('dblclick', () => {
    alert('i have been clicked')   
})





