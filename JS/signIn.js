var x = document.getElementById("link")
var y = document.getElementById("sign")
x.addEventListener('click', function() {
    if(y.style.height == "285px"){
        y.style.height = "320px";
    }
    else if(y.style.height == "320px"){
        y.style.height = "285px";
    }
            
}, true);

var c = document.getElementById("con");
var em = document.getElementById("Email");
c.addEventListener('click', function() {
    localStorage.setItem('email', em.value);

});