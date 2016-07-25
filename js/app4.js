//

function four() {
    var x = document.querySelector(".js-4");
    // console.log(x);
    
    x.innerText = "JS czwarty działa!";
    
};

document.addEventListener("DOMContentLoaded", function() {
    
    one();
    two();
    three();
    four();
   
});