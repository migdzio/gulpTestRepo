function one() {
    var x = document.querySelector(".js-1");
    // console.log(x);
    
    x.innerText = "JS pierwszy działa!";
    
};
//

function two() {
    var x = document.querySelector(".js-2");
    // console.log(x);
    
    x.innerText = "JS drugi działa!";
    
};
//

function three() {
    var x = document.querySelector(".js-3");
    // console.log(x);
    
    x.innerText = "JS trzeci działa!";
    
};
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