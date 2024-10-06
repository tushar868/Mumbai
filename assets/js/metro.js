document.addEventListener('DOMContentLoaded', function() {
    const metroLineSelect = document.querySelector('select[name="metro_line"]');
    const metroRouteSelect = document.querySelector('select[name="metro_route_number"]');
  
    
    const metroRoutes = {
      blue: [
        { value: 'ghatkopar', text: 'Towards Ghatkopar' },
        { value: 'versova', text: 'Towards Versova' }
      ],
      yellow: [
        { value: 'dahisar', text: 'Towards Dahisar' },
        { value: 'andheri-west', text: 'Towards Andheri West' }
      ],
      red: [
        { value: 'andheri-east', text: 'Towards Andheri East' },
        { value: 'mira-road', text: 'Towards Mira Road' }
      ]
    };
  
   
    metroLineSelect.addEventListener('change', function() {
      const selectedMetroLine = this.value;
      metroRouteSelect.innerHTML = '<option value="" disabled selected>Select Metro Route*</option>'; 
  
      
      if (metroRoutes[selectedMetroLine]) {
        metroRoutes[selectedMetroLine].forEach(route => {
          const option = document.createElement('option');
          option.value = route.value;
          option.textContent = route.text;
          metroRouteSelect.appendChild(option);
        });
      }
    });
  });
  
