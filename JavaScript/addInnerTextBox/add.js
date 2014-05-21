function myFunction() {
    var value=document.getElementById("input").value;
    
    if (value != ""){
        var ul= document.getElementById("demo");
        var li= document.createElement('li');
        li.appendChild(document.createTextNode(value));
        ul.appendChild(li);
        document.getElementById("input").value="";
    }
}

