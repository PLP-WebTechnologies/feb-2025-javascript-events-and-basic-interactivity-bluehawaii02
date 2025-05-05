// Get form and input elements
const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const message = document.getElementById('message');

// Form submit event
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Stop the form from submitting

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  // Reset previous message state
  message.textContent = '';
  message.className = '';

  // Validation logic
  if (name === '' || email === '') {
    message.textContent = 'Please fill in all fields.';
    message.classList.add('error');
    return;
  }

  if (!email.includes('@') || !email.includes('.')) {
    message.textContent = 'Please enter a valid email address.';
    message.classList.add('error');
    return;
  }

  // If everything is valid
  message.textContent = 'Form submitted successfully!';
  message.classList.add('success');
  form.reset();
});
