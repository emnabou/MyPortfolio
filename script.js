document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }
  
    // You can later replace this with AJAX to send data to server
    alert('Thank you, ' + name + '! Your message has been sent.');
    
    // Clear the form
    document.getElementById('contact-form').reset();
  });
  