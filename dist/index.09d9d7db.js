var myIndex = 0;
carousel();
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for(i = 0; i < x.length; i++)x[i].style.opacity = 0;
    myIndex++;
    if (myIndex > x.length) myIndex = 1;
    x[myIndex - 1].style.opacity = 1;
    setTimeout(carousel, 3000); // Change image every 3 seconds
}

//# sourceMappingURL=index.09d9d7db.js.map
