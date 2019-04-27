/*
//Get modal element
var modal = document.getElementById('simpleModal');

//Get open modal button
var reviewBtn = document.getElementById('reviewBtn');

//get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];


//Listen for open click
reviewBtn.addEventListener('click',openModal);

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
*/
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
	modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}