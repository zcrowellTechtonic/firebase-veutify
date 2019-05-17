<template>
  <v-container fluid>
    <v-layout text-xs-center class="tester">
      <v-flex mb-4 ma-2>
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
      <v-flex mb-4 white>
        <v-card>
          <p class="text-sm-center mt-3">Monthly Breakdown</p>
          <BarChart></BarChart>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import LowRiskProjects from "./LowRiskProjects";
import MediumRiskProjects from "./MediumRiskProjects";
import HighRiskProjectsTwo from "./HighRiskProjectsTwo";
import BarChart from "./charts/BarChart";

export default {
  name: "RiskGrid",
  components: {
    LowRiskProjects,
    MediumRiskProjects,
    HighRiskProjectsTwo,
    BarChart
  }
};
</script>

<style>
@media (max-width: 1199.98px) {
  .tester {
    display: flex;
    flex-direction: column;
  }
}
</style>