// Elements
const btnSubmit = document.getElementById('submit');

// Listeners
btnSubmit.addEventListener('click', handleFormSubmision);

function handleFormSubmision(e) {
  localStorage.setItem('data', "Hello");
  // alert('Form submitted');
}