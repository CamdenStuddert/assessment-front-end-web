console.log("hello world");

let catPic = document.querySelector(`#catPic`)

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert(`The Form has been successfully submitted!`)
}

const catComplement = evt => {
	evt.preventDefault();

	alert(`You must love Cats!`)
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

catPic.addEventListener('mouseover', catComplement)