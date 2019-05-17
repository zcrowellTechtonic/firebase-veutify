<template>
  <section class="container">

 <v-layout text-xs-center class="tester" wrap>
      <v-flex mb-4 ma-2 white>
         <h3>Bubble Chart</h3>
        <BubbleChart></BubbleChart>
      </v-flex>
      <v-flex mb-4 ma-2 white>
        <h3>Bar Chart</h3>
        <BarChart></BarChart>
      </v-flex>
      <v-flex mb-4 ma-2 white>
        <h3>Reactive Chart</h3>
        <Reactive :chart-data="datacollection"></Reactive>
<v-btn class="button is-primary" @click="fillData()">Rando</v-btn>
      </v-flex>
    </v-layout>


     <v-layout text-xs-center wrap>
      <v-flex mb-4 ma-2 white>
         <h3>Doughnut Chart</h3>
        <DoughnutChart></DoughnutChart>
      </v-flex>
      <v-flex mb-4 ma-2 white>
        <h3>Pie Chart</h3>
        <PieChart></PieChart>
      </v-flex>
    </v-layout>

     <v-layout wrap>
      <v-flex mb-4 white>
        <v-card>
          <p class="text-sm-center mt-3">Line Chart</p>
          <LineChart></LineChart>
        </v-card>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
  import LineChart from '@/components/charts/LineChart'
  import BarChart from '@/components/charts/BarChart'
  import BubbleChart from '@/components/charts/BubbleChart'
  import DoughnutChart from '@/components/charts/DoughnutChart'
  import PieChart from '@/components/charts/PieChart'
  import Reactive from '@/components/charts/Reactive'
 

  export default {
    name: 'VueChartJS',
    components: {
      LineChart,
      BarChart,
      BubbleChart,
      PieChart,
      DoughnutChart,
      Reactive
    },
    data () {
  return {
    // instantiating datacollection with null
    datacollection: null
  }
},
created () {
  //anytime the vue instance is created, call the fillData() function.
  this.fillData()
},
methods: {
  fillData () {
    this.datacollection = {
      // Data for the y-axis of the chart
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#f87979',
          // Data for the x-axis of the chart
          data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
        }
      ]
    }
  },
  getRandomInt () {
    // JS function to generate numbers to be used for the chart
    return Math.floor(Math.random() * (50 - 5 + 1)) + 5
  }
}
  }
</script>

<style>

</style>