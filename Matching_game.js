var number=5;
function generate_faces() {
    var theLeftside = document.getElementById('leftside');
    var theRightside = document.getElementById('rightside');
    var theBody = document.getElementsByTagName('body')[0];
    for (var i = 0; i < number; i++) {
        var theImg = document.createElement("img");
        theImg.src = "smile.png";
        theImg.style.top = Math.random() * 300 + "px";
        theImg.style.left = Math.random() * 300 + "px";
        theLeftside.appendChild(theImg);
    }
    var leftsideImages = theLeftside.cloneNode(true);
    leftsideImages.removeChild(leftsideImages.lastChild);
    theRightside.appendChild(leftsideImages);
    theLeftside.lastChild.onclick = function nextLevel(event) {
        event.stopPropagation();
        while(theLeftside.firstChild){
          theLeftside.removeChild(theLeftside.firstChild);
        }
        theRightside.removeChild(leftsideImages);
        number += 5;
        generate_faces();
    };
    theBody.onclick = function gameOver() {
        alert("Game Over!!!");
        theBody.onclick = null;
        theLeftside.lastChild.onclick = null;
    };

}
