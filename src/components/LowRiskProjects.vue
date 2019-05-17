<template>
  <v-card>
    <!-- TOOLBAR COLOR AND CONTENT SET HERE -->
    <v-toolbar color="green" class="layout justify-center" dark>
      <v-toolbar-title>Low Risk</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <!-- END OF TOOLBAR -->

    <!-- START OF EXPLANSION PANEL -->
    <v-expansion-panel dark expand>
      <!-- EXPANSION PANEL CONTENT -->
      <v-expansion-panel-content v-for="(projects, i) in project" :key="i">
        <template v-slot:header title>
          <!-- DIV HOLDING NAME OF PROJECT -->
          <div>{{projects.title}}</div>
          <!-- END OF DIV HOLDING PROJECT NAME -->
          <!-- START OF BADGE -->
          <!-- <v-badge color="cyan darken-3 pd-3" class="mr-4">
            <template v-slot:badge>
              <span>3</span>
            </template>
          </v-badge> -->
          <!-- END OF BADGE -->
        </template>
        <!-- CARD HOLDING DATA TABLE -->
        <v-card>
           <v-chip color="cyan darken-3">3</v-chip>
          <div id="spinner-circle-low" class="text-xs-center">
            <h2 class="mb-2">Overall Health</h2>
            <v-progress-circular
              class="circle mb-3"
              :rotate="360"
              :size="150"
              :width="20"
              :value="value"
              color="teal"
            >{{ value }}</v-progress-circular>
          </div>
          <router-link to="/projectinfo">
          <v-btn>Project Details</v-btn>
          </router-link>
          <!-- START OF DATA TABLE ITSELF -->
          <v-data-table :headers="headers" :items="projectData" class="elevation-1">
            <template v-slot:items="props">
              <td>{{ props.item.name }}</td>
              <td class="text-xs-right">{{ props.item.stats}}</td>
            </template>
          </v-data-table>
          <!-- END OF THE DATA TABLE -->
        </v-card>
        <!-- END OF CARD HOLDING DATA TABLE -->
      </v-expansion-panel-content>
      <!-- END OF EXPANSION PANEL CONTENT -->
    </v-expansion-panel>
    <!-- END OF EXPANSION PANEL -->
  </v-card>
</template>

<script>
import BarChart from "./charts/BarChart";
export default {
  components: [BarChart],
  beforeDestroy() {
    clearInterval(this.interval);
  },
  mounted() {
    // this.interval = setInterval(() => {
    //   if (this.value === 100) {
    //     return (this.value = 0)
    //   }
    //   this.value += 10
    // }, 1000)
    // this.interval = setInterval(() => {
    //   if (this.valueTwo === 100) {
    //     return (this.valueTwo = 0)
    //   }
    //   this.valueTwo += 10
    // }, 1000)
  },

  // components: {
  //   // BarChart
  // },
  data() {
    return {
      interval: {},
      value: "20%",
      valueTwo: "22%",
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
        }
      ],
      project: [
        {
          complete: true,
          title: "BEAT PORT"
        },
        {
          complete: false,
          title: "SPHERO"
        },
        {
          complete: false,
          title: "CSA",
          Info: "This could be used to get more info about project later"
        }
      ],
      // panel: [false, true, true]
      headers: [
        {
          text: "Metric",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Stat", align: "right", value: "calories" }
      ],
      projectData: [
        {
          name: "Risk Rating",
          stats: "10GA"
        },
        {
          name: "Budget Used",
          stats: "23%"
        },
        {
          name: "Project Completion",
          stats: "62%"
        }
      ],
    };
  }
};
</script>

<style>
.circle {
  background-color: white;
  border-radius: 75px;
  padding: 2em;
  opacity: 0.75;
}

#spinner-circle-low {
  background-color:  rgba(30, 92, 79, 0.233);
    border: 1px solid rgb(100, 100, 100);
}
</style>