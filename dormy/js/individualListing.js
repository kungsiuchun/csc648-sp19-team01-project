//Get modal element
var modal = document.getElementById('simpleModal');
//Get open modal button
var modalBtn = document.getElementById('modalBtn');
//get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//Listen for open click
modalBtn.addEventListener('click',openModal);

//Listen for close click
closeBtn.addEventListener('click',closeModal);

//Listen for outside click
window.addEventListener('click', outsideClick)
//Function to open modal
function openModal(){
	modal.style.display = 'block';
}

function closeModal(){
	modal.style.display ='none';
}

//function to close modal if outside click
function outsideClick(e){
	if(e.target ==modal){

	modal.style.display ='none';
}
}