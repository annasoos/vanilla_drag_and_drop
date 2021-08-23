const elements = {};


function fileAdded(event) {

	let fileNames = [];

	for (let file of event.target.files) {
		fileNames.push(file.name)
	}

	document.querySelector("#upload h2").innerHTML = fileNames;

	console.log(fileNames);

};

function fileUpload(event) {

	let uploadedImages = [];
	let input = document.querySelector("#inputElement");
	let container = document.getElementById("uploadedContainer");


	for (let i = 0; i < input.files.length; ++i) {
		uploadedImages.push(input.files[i]);
	}

	console.log(uploadedImages)

	while (container.firstChild) {
		container.removeChild(container.lastChild);
	};

	for(let element of uploadedImages){

		container.insertAdjacentHTML("beforeend", `
			<img src="${URL.createObjectURL(element)}" alt="Your image(s) appears here">`);
	}

};


function loadEvent() {

	const rootElement = document.getElementById("root");
	const uploadIDname = "upload";
	const inputIDname = "inputElement";

	rootElement.insertAdjacentHTML("afterbegin", `<div id=${uploadIDname}> </div>`);
	rootElement.insertAdjacentHTML("beforeend", `
	<button id="uploadBtn" type="submit"> Upload </button>
	<div id="uploadedContainer"></div>`);

	const dropArea = document.getElementById(`${uploadIDname}`);

	dropArea.insertAdjacentHTML("beforeend", `
	<input type="file" id=${inputIDname} multiple accept="image/*">
	<h2> Click & select OR drag & drop your images here </h2>`);

	elements.uploadE = document.querySelector("#upload");
	elements.inputE = document.querySelector("#inputElement");
	elements.uploadBtn = document.querySelector("#uploadBtn");

	elements.inputE.addEventListener("change", fileAdded);
	elements.uploadBtn.addEventListener("click", fileUpload);

};


window.addEventListener("load", loadEvent);