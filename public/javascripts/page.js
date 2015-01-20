(function() 
{
//FIX MISSING HEADER IN FIRST ARTICLE
var newElement= document.createElement('h1');                  //create an element
newElement.textContent = "My First Blog Post "; 		       //create text content
var firstArticle = document.getElementsByTagName('article')[0];    

firstArticle.insertBefore(newElement, firstArticle.firstChild );

// for creating new article define variables
var myNewElement=document.createElement('article') ;
var myNewElementSub1 = document.createElement('h1');
var myNewElementSub3 = document.createElement('p');

// create a new article
myNewElementSub1.textContent = "My Second Blog Post";
myNewElementSub3.textContent = "This is a blog post about really awesome stuff I've done in JavaScript."; 
 
myNewElement.appendChild(myNewElementSub1);
myNewElement.appendChild(myNewElementSub3);
//insert new article
document.body.insertBefore(myNewElement, document.body.firstChild.nextSibling );
 
////////////////////////////////////////////////////////////////////////////////////////
  
function insertStuff (event) {
    var element4 = document.createElement('p');
    element4.textContent = "this text inserted ";
    event.target.appendChild(element4);
    }

function showAndHide(event){
	var element = event.target;
	if (element.nextSibling.style.display === "none"){
		element.nextSibling.style.display = "block";
	}
	else {element.nextSibling.style.display = "none";
	}
 };

function switchParaHighlight(event2){
	var element = event.target;
    if (element.style["font-weight"] !== "bold")
	{element.style["font-weight"] = "bold";
 	}
	else {element.style["font-weight"] = "normal";
	}
 };

var el = document.getElementsByTagName("h1");
	for (var i=0; i<el.length; i++){ 
		el[i].addEventListener("click", showAndHide );
	}

var el = document.getElementsByTagName("p");
	for (var i=0; i<el.length; i++){ 
		el[i].addEventListener("click", switchParaHighlight );
	}

 
//////////

}
)  ();




 