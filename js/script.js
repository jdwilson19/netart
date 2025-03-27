function changeImage(fileName) {
    let img = document.querySelector('#wolf');
    img.setAttribute('src', fileName);

    sessionStorage.setItem('selectedImage', fileName);

    let doneButtonLink = document.querySelector('a');
    doneButtonLink.href = 'pagethree.html';
}

/*code below sourced from chatgpt */
window.onload = function() {
    let img = document.querySelector('#wolf'); 

    let selectedImage = sessionStorage.getItem('selectedImage');

    if (selectedImage) {
    img.setAttribute('src', selectedImage);
    }
}

function saveName() {
    let wolfName = document.querySelector('#wolfName').value;

    sessionStorage.setItem('wolfName', wolfName);

    window.location.href = 'pagefour.html';
}