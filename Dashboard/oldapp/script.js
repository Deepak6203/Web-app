// Get references to the button and content div
const toggleButton = document.getElementById('toggleButton');
const contentDiv = document.getElementById('contentDiv');

// Add a click event listener to the button
toggleButton.addEventListener('click', function() {
    // Toggle the visibility of the content div
    if (contentDiv.style.display === 'none') {
        contentDiv.style.display = 'block';
    } else {
        contentDiv.style.display = 'none';
    }
});
