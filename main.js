let textBlock = document.querySelector('.text-block');
let textInside = document.querySelector('.text');
let editBtn = document.getElementById('edit-btn');
let saveBtn = document.getElementById('save-btn');
let cancelBtn = document.getElementById('cancel-btn');

if (localStorage.getItem(textInside) !== null) {
 textBlock.innerHTML = localStorage.getItem(textInside);
}

editBtn.addEventListener('click', function (ev) {
 
 saveBtn.removeAttribute('disabled');
 saveBtn.classList.add('active');
 
 cancelBtn.removeAttribute('disabled');
 cancelBtn.classList.add('active');
 
 editBtn.setAttribute('disabled', 'true');
 editBtn.classList.remove('active');
 
 textBlock.contentEditable = true; 
});

saveBtn.addEventListener('click', function (ev) {
 localStorage.setItem(textInside, textBlock.innerHTML);
 
 saveBtn.setAttribute('disabled', 'true'); 
 saveBtn.classList.remove('active');
 
 cancelBtn.setAttribute('disabled', 'true');
 cancelBtn.classList.remove('active');

 editBtn.removeAttribute('disabled');
 editBtn.classList.add('active');
 
 textBlock.contentEditable = false; 
});

cancelBtn.addEventListener('click', function (ev) {
 
 saveBtn.setAttribute('disabled', 'true'); 
 saveBtn.classList.remove('active');
 
 cancelBtn.setAttribute('disabled', 'true'); 
 cancelBtn.classList.remove('active');
 
 editBtn.removeAttribute('disabled');
 editBtn.classList.add('active');

 textBlock.innerHTML = localStorage.getItem(textInside);
 textBlock.contentEditable = false; 
});