var button=document.getElementById("enter");
var ul=document.querySelector("ul");
var input=document.getElementById("userinput");

function inputLength(){
	return input.value.length;
}
function removeParent(evt){
	evt.target.parentNode.remove();
}
function underlineParent(evt){
		evt.target.parentNode.classList.toggle("done");
}
function createElementList(){
	var li=document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	var buttons=document.createElement("button");
	li.appendChild(buttons);
	buttons.innerHTML="Delete!";
	buttons.onclick=removeParent;
	input.value="";
	var buttons=document.createElement("button");
	li.appendChild(buttons);
	buttons.innerHTML="Done!";
	buttons.onclick=underlineParent;

}
button.addEventListener("click",function(){
	if(inputLength() > 0){
	createElementList();
}

});
input.addEventListener("keypress",function(event){
			if(inputLength()> 0 && event.keyCode === 13){
				createElementList();
			}
});