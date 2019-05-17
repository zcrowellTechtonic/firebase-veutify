<template>
  <v-container fluid>
    <v-layout text-xs-center class="tester">
      <v-flex mb-4 ma-2>
        <template>
</template>
        <LowRiskProjects/>
      </v-flex>
      <v-flex mb-4 ma-2>
        <MediumRiskProjects/>
      </v-flex>
      <v-flex mb-4 ma-2>
        <HighRiskProjectsTwo/>
      </v-flex>
    </v-layout>

    <v-layout wrap>
      <v-flex mb-4>
        <v-card color="grey darken-3">
          <p class="text-sm-center mt-3">Monthly Breakdown</p>
          <BarChart></BarChart>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import LowRiskProjects from "../components/LowRiskProjects";
import MediumRiskProjects from "../components/MediumRiskProjects";
import HighRiskProjectsTwo from "../components/HighRiskProjectsTwo";
import BarChart from "../components/charts/BarChart";
import firebase from "firebase";
export default {
  name: "home",
    components: {
    LowRiskProjects,
    MediumRiskProjects,
    HighRiskProjectsTwo,
    BarChart
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    }
  }
};
</script>

<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}
li {
  float: left;
}
li a {
  font-size: 1.5em;
  display: block;
  color: white;
  text-align: center;
  text-decoration: none;
}
li a:hover {
  color: rgb(124, 124, 124);
}
</style>