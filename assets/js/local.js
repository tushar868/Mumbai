



document.addEventListener('DOMContentLoaded', function() {
    const lineSelect = document.querySelector('select[name="local_line"]');
    const routeSelect = document.querySelector('select[name="route_number_local"]');
  
    const routes = {
      harbour: [
        { value: 'csmt', text: 'Towards CSMT' },
        { value: 'panvel', text: 'Towards Panvel' }
      ],
      central: [
        { value: 'csmt', text: 'Towards CSMT' },
        { value: 'kalyan', text: 'Towards Kalyan/Khopoli/Kasara' }
      ],
      western: [
        { value: 'churchgate', text: 'Towards Churchgate' },
        { value: 'virar', text: 'Towards Virar/Borivali' }
      ]
    };
  
    lineSelect.addEventListener('change', function() {
      const selectedLine = this.value;
      routeSelect.innerHTML = '<option value="" disabled selected>Select Route*</option>'; // Reset route options
  
      if (routes[selectedLine]) {
        routes[selectedLine].forEach(route => {
          const option = document.createElement('option');
          option.value = route.value;
          option.textContent = route.text;
          routeSelect.appendChild(option);
        });
      }
    });
  });


