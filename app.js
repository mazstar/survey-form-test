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
  
  localStorage.setItem('name', nameInput.value);
  localStorage.setItem('email', emailInput.value);
  localStorage.setItem('age', ageInput.value);
  localStorage.setItem('role', roleInput.value);

  for(i = 0; i < recommendInput.length; i++) {
    if(recommendInput[i].checked) {
      localStorage.setItem('recommendation', recommendInput[i].value);
    }
  }

  localStorage.setItem('feature', featureInput.value);

  let improvements = [];
  for(i = 0; i < improvementInput.length; i++) {
    if(improvementInput[i].checked) {
      improvements.push(improvementInput[i].value);
    }
  }
  localStorage.setItem('improvements', JSON.stringify(improvements));

  localStorage.setItem('comment', commentsInput.value);

  document.querySelector('#formPage-container').remove();

  //Now add a div with class thanks-container and a p1 with Thankyou text
  const div = document.createElement('div');
  const heading1 = document.createElement('h1');
  const text = document.createTextNode('Thank you!');

  div.className = 'thanks-container';
  
  heading1.appendChild(text);
  div.appendChild(heading1);
  document.body.appendChild(div);

 
  e.preventDefault();
}