//Detect whether the document is ready.
function documentReady(func){
	window.addEventListener("load", function(){
        func();
    }); 
}

//Change the location of the window.
function windowLocation(newPlace){
	window.location = newPlace;
}

//Split the string into an array of characters.
function explode(array){
	var explodedArray = array.split("");
	return explodedArray;
}

//Find the index of a certain char, int ect in an array.
function indexOf(char, array){
	var index = 0;
	for(findIndex = 0; findIndex < array.length; findIndex++){
		if(array[findIndex] === char){
			index = findIndex;
		}else{}
	}
	
	return index;
}

//Combine the items of two arrays into one array.
function mergeArray(arrayOne, arrayTwo, unique){
	//New array.
	var newArray = arrayOne.concat(arrayTwo);
	return newArray;
}

//Convert an array to a string.
function arrayToString(array, seperator){
	if(seperator === undefined){
		seperator = "";
	}else{}
	var variable = "";
	for(arrTo = 0; arrTo < array.length; arrTo++){
		if(arrTo !== 0){
			variable = variable + seperator + array[arrTo].toString();
		}else{
			variable = variable + array[arrTo].toString();
		}
	}
	return variable;
}

//Clear/wipe an array.
function drainArray(array){
	var newArray = new Array(array.length);
	return newArray;
}

//Server-side functions.
//Text call (textfile, success function).
function textCall(filename, func){	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			func(this.responseText);
		}else{}
	};
	xhttp.open("GET", filename, true);
	xhttp.send();
}

//PHP: Call to any PHP file (file, data given, success function).
function phpCall(filename, data, func){
    var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			func(this.responseText);
		}else{}
	};
	xhttp.open("GET", filename + "?jamPass=" + data, true);
	xhttp.send();
}

//Scrape the element by id from an external server.
function scrapeElementById(url, newId, func){
    var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			func(this.responseText);
		}else{}
	};
	xhttp.open("GET", "lib_php/scrapeElementById.php?idPass=" + url + " " + newId, true);
	xhttp.send();
}

//Scrape the tagname by id from an external server.
function scrapeTagById(url, newId, func){
    var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
    		func(this.responseText);
    	}else{}
	};
	xhttp.open("GET", "lib_php/scrapeTagById.php?tagPass=" + url + " " + newId, true);
	xhttp.send();
}

//Scrape an element by tagname.
function scrapeElementsByTag(url, tagName, func, index){
    var realIndex = "";
    if(index === undefined){
        realIndex = "all";
    }else{
        realIndex = index;
    }
    var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			func(this.responseText);
		}{}
	};
	xhttp.open("GET", "lib_php/scrapeElementsByTag.php?tagPass=" + url + " " + tagName + " " + realIndex, true);
	xhttp.send();
}

//Scrape all the p elements from a webpage.
function scrapeTextContent(url, func){
    var realIndex = "all";
    var tagName = "p";
    var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			func(this.responseText);
		}else{}
	};
	xhttp.open("GET", "lib_php/scrapeElementsByTag.php?tagPass=" + url + " " + tagName + " " + realIndex, true);
	xhttp.send();
}

//Scrape attribute by tag name.
function scrapeTagAttr(url, newTag, attr, func){
    var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
    		func(this.responseText);
    	}else{}
	};
	xhttp.open("GET", "lib_php/scrapeTagAttr.php?tagPass=" + url + " " + newTag + " " + attr, true);
	xhttp.send();
}