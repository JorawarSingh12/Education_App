
var ctx = document.getElementById('myChart');
data = {
    datasets: [{
        data: [10, 20, 30]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Red',
        'Yellow',
        'Blue'
    ]
};
var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options: options
});

// And for a doughnut chart
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options
});