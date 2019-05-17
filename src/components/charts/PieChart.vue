<script>
  //Importing Bar class from the vue-chartjs wrapper
  import { Pie } from 'vue-chartjs'
  //Exporting this so it can be used in other components
  export default {
    extends: Pie,
    data () {
      return {
        datacollection: {
          //Data to be represented on x-axis
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
         datasets: [
          {
            label: "Low",
            data: [12, 39, 3, 50, 2, 32, 84],
            backgroundColor: "rgba(142, 226, 179, 0.5)",
            borderWidth: 1
          },
          {
            label: "Medium",
            data: [56, 24, 5, 16, 45, 24, 8],
            backgroundColor: "rgba(245, 192, 50, 0.5)",
            borderWidth: 1
          },
          {
            label: "High",
            data: [12, 25, 54, 3, 15, 44, 3],
            backgroundColor: "rgba(245, 74, 85, 0.5)",
            borderWidth: 1
          }
        ]
        },
        //Chart.js options that controls the appearance of the chart
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [ {
              gridLines: {
                display: true
              }
            }]
          },
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted () {
      //renderChart function renders the chart with the datacollection and options object.
      this.renderChart(this.datacollection, this.options)
    }
  }
</script>