// const open1 = document.getElementById('open1')
// const modal1 = document.getElementById('modal1')
// const close = document.getElementById('close')

// open1.addEventListener('click', () => {
// modal1.classList.add('show');
// });

close.addEventListener('click', () => {
modal1.classList.remove('show');
});
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
    myInput.focus()
})