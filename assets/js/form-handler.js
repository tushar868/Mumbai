
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function (event) {
      event.preventDefault();  
      
      const formData = new FormData(form);
      
      
      fetch(form.action, {
        method: 'POST',
        body: formData,
      })
      .then(response => response.text())
      .then(data => {
        console.log(data); 
        if (data.toLowerCase().includes("success")) {
          
          const modal = document.getElementById("successModal");
          modal.style.display = "block";

          
          form.reset();  
        } else {
          alert('There was an issue with the submission. Please try again.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Error submitting the form. Please try again.');
      });
    });
  });

  
  var modal = document.getElementById("successModal");

  
  var span = document.getElementsByClassName("close")[0];

  
  span.onclick = function() {
    modal.style.display = "none";
  }

  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

