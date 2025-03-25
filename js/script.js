// Function to change the image and store the selection in sessionStorage
function changeImage(fileName) {
    let img = document.querySelector('#wolf');
    img.setAttribute('src', fileName);

    // Save the selected image to sessionStorage
    sessionStorage.setItem('selectedImage', fileName);

    // Dynamically update the "Done" button's link to pass the image on to the next page
    let doneButtonLink = document.querySelector('a');
    doneButtonLink.href = 'pagethree.html';
}


// Custom cursor movement
document.addEventListener('mousemove', function(event) {
    // Ensure the custom cursor exists
    var cursor = document.querySelector('.custom-cursor');
    if (cursor) {
        cursor.style.left = event.pageX + 'px';
        cursor.style.top = event.pageY + 'px';
    }
});

window.onload = function() {
    let img = document.querySelector('#wolf'); // Ensure you have an img with this ID
    let selectedImage = sessionStorage.getItem('selectedImage');

    if (selectedImage) {
    img.setAttribute('src', selectedImage);
    }
};

function saveName() {
    // Get the value of the name entered in the input box
    let wolfName = document.querySelector('#wolfName').value;

    // Save the name to sessionStorage (or localStorage if you prefer)
    sessionStorage.setItem('wolfName', wolfName);

    // Optionally, you can display the name on the page
    alert('Name saved: ' + wolfName);

    // You can also redirect the user to the next page after saving the name
    window.location.href = 'pagethree.html'; // or whatever page you'd like to redirect to
}
