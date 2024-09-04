const ctxPie = document.getElementById('pieChart').getContext('2d');
const ctxBar = document.getElementById('barChart').getContext('2d');

// Initial Data
let minesData = {
    labels: ['Alpha Mine', 'Beta Mine', 'Gamma Mine'],
    datasets: [{
        label: 'Carbon Footprint',
        data: [500000, 750000, 600000],
        backgroundColor: [
            'rgba(54, 162, 235, 0.7)', // Alpha Mine
            'rgba(75, 192, 192, 0.7)', // Beta Mine
            'rgba(255, 206, 86, 0.7)'  // Gamma Mine
        ],
        borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
    }]
};

// Pie Chart
const pieChart = new Chart(ctxPie, {
    type: 'pie',
    data: minesData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            }
        }
    }
});

// Bar Chart
const barChart = new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: minesData.labels,
        datasets: [{
            label: 'Carbon Footprint (tons CO2e)',
            data: minesData.datasets[0].data,
            backgroundColor: minesData.datasets[0].backgroundColor,
            borderColor: minesData.datasets[0].borderColor,
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Calculate Carbon Footprint
document.getElementById('calculateBtn').addEventListener('click', function () {
    const coalProduction = parseFloat(document.getElementById('coalProduction').value);
    const electricityUsage = parseFloat(document.getElementById('electricityUsage').value);
    const fuelConsumption = parseFloat(document.getElementById('fuelConsumption').value);

    // Calculate the new carbon footprint (this is a simplistic formula, you may adjust it)
    const newFootprint = coalProduction * 2.86 + electricityUsage * 0.92 + fuelConsumption * 2.68;

    // Update the data for the first mine (you can decide which mine to update or create a new one)
    minesData.datasets[0].data[0] = newFootprint;

    // Update text on the page
    document.getElementById('alphaFootprint').textContent = newFootprint.toLocaleString();

    // Update the charts
    pieChart.update();
    barChart.update();
});
