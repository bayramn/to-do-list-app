window.onload=function(){
var liList= document.getElementsByTagName('LI');
for (var i =0; i <= liList.length-1; i++) {
var span = document.createElement("span");
    var xSpan = document.createTextNode("x");
    span.appendChild(xSpan);
    span.className ='close';
    liList[i].appendChild(span);

}

    var list =  document.querySelector('ul');
 list.addEventListener('click', function(ev){

  if (ev.target.tagName === 'LI') {  
ev.target.classList.toggle("checked");}
 
});

//window.onload=function(){
    var addButton = document.querySelector(".addBtn");
    addButton.addEventListener('click',function() {
    var txt = document.getElementById("myInput").value;
    var node = document.createElement("LI");
    var txtNode = document.createTextNode(txt);
    node.appendChild(txtNode);
    document.getElementById("myUL").appendChild(node);
    document.getElementById('myInput').value =''; 

    var span = document.createElement("span");
    var xSpan = document.createTextNode("x");
    span.appendChild(xSpan);
    span.className ='close';
    node.appendChild(span);
     var close = document.getElementsByTagName('SPAN');
       

    for (var i =1; i <= close.length-1; i++) { 
    close[i].onclick = function() {
 
     if (this.className=='close') {
        this.style.display = 'none';
        this.parentElement.style.display = 'none';
     }
    
    }; 
} 
  });




     var close = document.getElementsByTagName('SPAN');
        //console.log(close);
    for (var i =1; i <= close.length-1; i++) { 
    close[i].onclick = function() {
if (this.className=='close') {
        this.style.display = 'none';
        this.parentElement.style.display = 'none';}

    }; 
} 


var txt1 = "Aman";
var node1 = document.createElement("LI");
    var txtNode1 = document.createTextNode(txt1);
    node1.appendChild(txtNode1);
document.getElementById("myUL").appendChild(node1);

}
