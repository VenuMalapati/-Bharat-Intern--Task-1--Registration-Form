// Get the form element
const form = document.querySelector('form');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get form input values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Perform form validation
  if (name === '' || email === '' || password === '') {
    alert('Please fill in all the fields');
    return;
  }

  // Perform additional validation if needed (e.g., email format)

  // Submit the form or perform other actions
  // For example, you can send the form data to a server using AJAX or fetch API
  // Example using fetch API:
  fetch('submit.php', {
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    // Handle the response from the server
    console.log(data);
    // You can redirect the user to another page or display a success message
  })
  .catch(error => {
    // Handle any error that occurred during form submission
    console.error(error);
  });
});
