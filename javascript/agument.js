function myFunction() {
   var ul= document.getElementById("demo");
   var li= document.createElement('li');
   var value=document.getElementById("input").value;
   if (value != ""){

      li.appendChild(document.createTextNode(value));
      ul.appendChild(li);
      //document.getElementById("input").select(""); 
   }
}

