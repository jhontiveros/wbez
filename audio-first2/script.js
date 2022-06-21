let btn = document.querySelector('button');
let content = document.querySelector(".detail-content")

btn.addEventListener('click', () => {
    if(content.style.display === 'none'){
        content.style.display = 'block';
    }else {
        content.style.display = 'none';
    }
})