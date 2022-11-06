/******** Back to Top ********/

const scrollup = document.querySelector("#btt");

scrollup.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});

/******** animation typing texte ********/

var i=0, text;
text="Portfolio CH"

function typing(){
    if(i<text.length){
        document.getElementById("texte").innerHTML+=text.charAt(i);
        i++;
        setTimeout(typing, 50);
    }
}

typing();