let icon = document.querySelector('.icon'),
    search = document.querySelector('.search'),
    clear = document.querySelector('.clear')

icon.addEventListener('click', function() {
    search.classList.toggle('active')
})

clear.addEventListener('click',() => {
    search.classList.remove('active')
})