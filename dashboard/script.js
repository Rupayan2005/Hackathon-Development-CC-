// Emissions Chart
const emissionsCtx = document.getElementById('emissionsChart').getContext('2d');
const emissionsChart = new Chart(emissionsCtx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Emissions',
            data: [200, 250, 230, 270, 220, 190],
            backgroundColor: '#e74c3c'
        }]
    },
    options: {
        responsive: true
    }
});

// Energy Consumption Chart
const energyCtx = document.getElementById('energyChart').getContext('2d');
const energyChart = new Chart(energyCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Energy Consumption',
            data: [50, 75, 150, 125, 175, 200],
            borderColor: '#3498db',
            fill: true,
            backgroundColor: 'rgba(52, 152, 219, 0.2)'
        }]
    },
    options: {
        responsive: true
    }
});

// Carbon Intensity Chart
const intensityCtx = document.getElementById('intensityChart').getContext('2d');
const intensityChart = new Chart(intensityCtx, {
    type: 'pie',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            data: [15, 25, 35, 20, 30, 25],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40']
        }]
    },
    options: {
        responsive: true
    }
});
 
