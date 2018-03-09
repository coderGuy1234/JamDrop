/*
JamDrop Open Source Javascript Library v1.0.0
Date: 04.03.18.
Written by James Ryan (codejoyContact@gmail.com).
*/

//Selector model.
function $(selector){
	//Main object.
	var jamdrop = {};
	jamdrop.selector = selector;
	jamdrop.element = document.querySelector(jamdrop.selector);
	
	//Get element by id.
	var id = document.getElementById(selector);
	
	//Basic DOM functions.
	if(selector !== null){
		
		//Collect the content of an element.
		jamdrop.getText = function(){
			var getText = id.innerHTML;
			return getText;
		}
		
		//Set the content of an element.
		jamdrop.setContent = function(newText){
			id.innerHTML = newText;
		}
		
		//Change the background of an element.
		jamdrop.background = function(newBackground){
			id.style.background = newBackground;
		}
		
		//Change the width of an element.
		jamdrop.width = function(newWidth){
			id.style.width = newWidth;
		}
		
		//Change the height of an element.
		jamdrop.height = function(newHeight){
			id.style.height = newHeight;
		}
		
		//Change the colour of an element.
		jamdrop.color = function(newColor){
			id.style.color = newColor;
		}
		
		//Change the font-family of an element.
		jamdrop.font = function(newFont){
			id.style.fontFamily = newFont;
		}
		
		//Change the font-size of an element.
		jamdrop.fontSize = function(newSize){
			id.style.fontSize = newSize;
		}		
		
		//Move the element right.
		jamdrop.moveRight = function(distance){
			id.style.position = "absolute";
			var currentPlace = 0;
			if(id.style.left.toString().includes("px")){
				currentPlace = parseInt(id.style.left.toString().replace("px", ""));
			}else{}
			var newPlace = (currentPlace + parseInt(distance.toString().replace("px", "")));
			distance = newPlace.toString() + "px";
			id.style.left = distance;
		}
		
		//Move the element left.
		jamdrop.moveLeft = function(distance){
			id.style.position = "absolute";
			var currentPlace = 0;
			if(id.style.left.toString().includes("px")){
				currentPlace = parseInt(id.style.left.toString().replace("px", ""));
			}else{}
			var newPlace = (currentPlace - parseInt(distance.toString().replace("px", "")));
			distance = newPlace.toString() + "px";
			id.style.left = distance;
		}
		
		//Show the element.
		jamdrop.show = function(){
			id.style.opacity = "1.0";
		}
		
		//Hide the element.
		jamdrop.hide = function(){
			id.style.opacity = "0.0";
		}
		
		//Detect element click.
		jamdrop.click = function(func){
			id.onclick = func;
		}
		
		//Detect element double click.
		jamdrop.dblClick = function(func){
			id.ondblclick = func;
		}
		
		//Destroy/remove the element.
		jamdrop.kill = function(){
			id.parentElement.removeChild(id);
		}
		
		//Remove all children of an element.
		jamdrop.drain = function(){
			//Not compatible in IE (fix that later). 
			id.innerHTML = "";
		}

		//Create a child element within the parent element.
		jamdrop.createChild = function(el){
			var newChild = document.createElement(el);
			id.appendChild(newChild);
		}
		
		//Detect mouse over element.
		jamdrop.mouseOver = function(func){
			id.addEventListener("mouseover", func);
		}
		
		//Detect mouse leaving element.
		jamdrop.mouseOut = function(func){
			id.addEventListener("mouseout", func);
		}
		
		//Detect hover over an element.
		jamdrop.hover = function(func){
			//Add this feature.
		}
		
		//Get the current styling of an element.
		jamdrop.getCss = function(css){
			var currentCss = window.getComputedStyle(id, null).getPropertyValue(css);
			return currentCss;
		}
		
		//Elevate the element.
		jamdrop.elevate = function(elevation, color){
			if(color === undefined){
				color = "#ededed";
			}else{}
			if(elevation === undefined){
				elevation = "1px";
			}else{}
			id.style.boxShadow = elevation + " " + elevation + " " + elevation + " " + elevation + " " + color;
		}
		
		//Get a specific attribute of a certain element.
		jamdrop.getAttr = function(attr){
			var attrValue = id.getAttribute(attr);
			return attrValue;
		}
		
		//Centre an element.
		jamdrop.centre = function(){
			var left = (id.parentElement.offsetWidth - id.offsetWidth) / 2;
			id.style.marginLeft = left.toString() + "px";
		}
		
		//Centre the text of an element.
		jamdrop.centreText = function(){
			id.style.textAlign = "center";
		}
		
	}else{}

	//Return jamdrop.
	return jamdrop;
}