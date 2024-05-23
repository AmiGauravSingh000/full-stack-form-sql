document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
  
    fetch('http://localhost:3000/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, mobile })
    })
    .then(response => response.text())
    .then(data => {
      alert(data);
      document.getElementById('userForm').reset();
    });
  });
  
  document.getElementById('toggleTable').addEventListener('click', function() {
    const tableContainer = document.querySelector('.table-container');
    const toggleButton = document.getElementById('toggleTable');
  
    if (tableContainer.style.display === 'none') {
      fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(data => {
        const table = document.getElementById('userTable');
        const tbody = table.querySelector('tbody');
        tbody.innerHTML = '';
  
        data.forEach(user => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.mobile}</td>
          `;
          tbody.appendChild(row);
        });
  
        tableContainer.style.display = 'block';
        toggleButton.textContent = 'Hide Table';
      });
    } else {
      tableContainer.style.display = 'none';
      toggleButton.textContent = 'Show Table';
    }
  });
  