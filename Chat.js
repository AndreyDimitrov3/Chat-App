let input = document.getElementById('input');
let noInputMobile = document.getElementById('noInputMobile');


document.getElementById('submit').addEventListener('click', appendText);
input.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
        appendText();
    }
});

function appendText(){
    let inputValue = input.value; 
    let newMessage = document.createElement('div');

    if(inputValue !== ''){
        newMessage.className = 'you-text';
        newMessage.innerHTML = `<p class="p-you">${inputValue}</p>`;
        
        noInputMobile.appendChild(newMessage);
    
        noInputMobile.scrollTop = noInputMobile.scrollHeight;
        input.value = '';
    }
}

document.querySelectorAll('.option').forEach(function(el){
    el.addEventListener('click', function(){
        let newMessage = document.createElement('div');
        document.querySelector('.option-holder').classList.add('hidden');
        
        newMessage.className = 'you-text';
        newMessage.innerHTML = `<p class="p-you">${el.dataset.time} walk for $${el.dataset.price} sounds great to me</p>`;
        noInputMobile.appendChild(newMessage)
    })
});