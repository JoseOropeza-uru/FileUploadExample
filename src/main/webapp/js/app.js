function $ (id) {
	return document.getElementById(id);
}

var xhr = new XMLHttpRequest();
var myFile = "";
function upload () {
	var formData = new FormData();
	formData.append("file", $("file").files[0]);
	myFile = $("file").files[0].name;
	
	xhr.onreadystatechange = function () {
		if (xhr.status === 200 && xhr.readyState === 4) {
			$("uploadStatus").textContent = xhr.responseText + "\nFile uploaded";
		}
	}
	
	xhr.open("post", "./FileUp", true);	
	xhr.send(formData);
	
}

function mulUpload(){
	var formData = new FormData();
	var files = $("files").files;
	console.log(files.length);
	for (var i = 0; i < files.length; i++) {
		  console.log('pao');
		  var file = files[i];
		  formData.append('photos[]', file, file.name);
		}	
	xhr.onreadystatechange = function () {
		if (xhr.status === 200 && xhr.readyState === 4) {
			$("uploadStatus").textContent = xhr.responseText + "\nFiles uploaded";
		}
	}
	xhr.open("post", "./MultFilesUp", true);	
	xhr.send(formData);
}

function download () {
	var url = "./GetFile?name="+ myFile;
	$("myImg").src = url;
	var downloadWindow = window.open(url);
}