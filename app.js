// Elements
// const btnSubmit = document.getElementById('submit');
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const ageInput = document.getElementById('age');
const roleInput = document.getElementById('role-dropdown');
const recommendInput = document.getElementsByName('recommend');
const featureInput = document.getElementById('feature-dropdown');
const improvementInput = document.getElementsByName('improvement-suggestion');
const commentsInput = document.getElementById('comments');


// Listeners
// btnSubmit.addEventListener('click', handleFormSubmission);
form.addEventListener('submit', handleFormSubmission);

function handleFormSubmission(e) {
  console.log('Form submitted!');
  console.log(`Name is ${nameInput.value}`);
  console.log(`Email is ${emailInput.value}`);
  console.log(`Age is ${ageInput.value}`);
  console.log(`Role is ${roleInput.value}`);

  for(i = 0; i < recommendInput.length; i++) {
    if(recommendInput[i].checked) {
      console.log(`Option to recommend is ${recommendInput[i].value}`);
    }
  }

  console.log(`Favourite feature is ${featureInput.value}`);

  for(i = 0; i < improvementInput.length; i++) {
    if(improvementInput[i].checked) {
      console.log(`Suggestion to improve is ${improvementInput[i].value}`);
    }
  }

  console.log(`Comment is ${commentsInput.value}`);

  //localStorage.setItem('data', "Hello");

    
  
  e.preventDefault();
}