const btn = document.getElementById('button');

document.getElementById('contactForm').addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_4pk9x3f'; // Replace with your Email.js service ID
   const templateID = 'template_8fs5q1p'; // Replace with your Email.js template ID

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Submit';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Submit';
      alert(JSON.stringify(err));
    });
});
