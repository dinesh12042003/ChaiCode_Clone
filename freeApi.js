let javascriptButton = document.getElementById("javascript");
let pythonButton = document.getElementById("python");
let curlButton = document.getElementById("curl");

let contentOne = document.getElementById("content_one");
let contentTwo = document.getElementById("content_two");
let contentThree = document.getElementById("content_three");

// Initially show JavaScript and hide others (optional)
contentOne.style.display = "block";
contentTwo.style.display = "none";
contentThree.style.display = "none";

javascriptButton.addEventListener('click', function() {
    contentOne.style.display = "block";
    contentTwo.style.display = "none";
    contentThree.style.display = "none";
});

pythonButton.addEventListener('click', function() {
    contentOne.style.display = "none";
    contentTwo.style.display = "block";
    contentThree.style.display = "none";
});

curlButton.addEventListener('click', function() {
    contentOne.style.display = "none";
    contentTwo.style.display = "none";
    contentThree.style.display = "block";
});
