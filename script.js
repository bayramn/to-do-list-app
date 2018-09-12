window.onload=function(){
//  Creating close button "x" and appending to each list item
var liList= document.getElementsByTagName('LI');
    for (var i =0; i <= liList.length-1; i++) {
        var span = document.createElement("span");
        var xSpan = document.createTextNode("x");
        span.appendChild(xSpan);
        span.className ='close';
        liList[i].appendChild(span);
    }
//code for to display checked list item 
var ulList = document.getElementsByTagName('UL');
    for (var i=0; i<=ulList.length-1; i++){
        var list =  ulList[i];
        list.addEventListener('click', function(ev){
            if (ev.target.tagName === 'LI') {  
            ev.target.classList.toggle("checked");
            }
        });
    }

// code for list items to delete when clicked "x" button
      var close = document.getElementsByTagName('SPAN');    
    for (var i =1; i <= close.length-1; i++) { 
        close[i].onclick = function() {  
            if (this.className=='close') {
                this.style.display = 'none';
                this.parentElement.style.display = 'none';
            }
        }; 
    } 


// code for adding new list itme when clicked "Add" button
var addButton= document.getElementsByClassName('addBtn');
    for (var j=0; j<= addButton.length-1; j++) { 
        addButton[j].addEventListener('click', function() {
            var txt1 = this.previousSibling.previousSibling.value;
            var node1 = document.createElement("LI");
            var txtNode1 = document.createTextNode(txt1);
            node1.appendChild(txtNode1);
            this.parentElement.parentElement.appendChild(node1);
            this.previousSibling.previousSibling.value =''; 

            var span = document.createElement("span");
            var xSpan = document.createTextNode("x");
            span.appendChild(xSpan);
            span.className ='close';
            node1.appendChild(span);

                for (var i =1; i <= close.length-1; i++) { 
                    close[i].onclick = function() {
 
                        if (this.className=='close') {
                        this.style.display = 'none';
                         this.parentElement.style.display = 'none';
                        }
                    }; 
                } 
        });
    }


} 
