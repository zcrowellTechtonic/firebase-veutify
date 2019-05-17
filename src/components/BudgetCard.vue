<template>
  <div>
    <v-toolbar class="" color="grey darken-4">
      <v-chip color="green" text-color="white" class="subheading">
      <v-avatar class="green darken-4 subheading" large>1</v-avatar>
      {{ projectName }}
    </v-chip>
    <v-spacer></v-spacer>
    <ProductSummaryCard></ProductSummaryCard>
    </v-toolbar>
    <br>
    <!-- BUDGET USED LOADER -->
    <v-card color="grey lighten-2">
      <v-toolbar class="layout justify-center">
      <v-toolbar-title>Budget Used: </v-toolbar-title>
    </v-toolbar>
        <span class="layout justify-space-between">
           <p class="font-weight-medium title"></p> <v-chip color="primary" text-color="white">{{ valueUsed }}%</v-chip>
        </span>
      <v-progress-linear 
      height="30" 
       :width="15"
      :value="valueUsed"
      color="teal"
      class="font-weight-medium"
      ></v-progress-linear>
    </v-card>
         <!-- REMAINING BUDGET LOADER -->
    <v-card color="grey lighten-2">
      <v-toolbar class="layout justify-center">
      <v-toolbar-title>Budget Remaining: </v-toolbar-title>
    </v-toolbar>
        <span class="layout justify-space-between">
            <p class="font-weight-medium title"></p><v-chip color="primary" text-color="white">{{ valueRemaining }}%</v-chip>
        </span>
      <v-progress-linear height="30" 
      :value="valueRemaining"
      color="orange"
      class="font-weight-medium"
      ></v-progress-linear>
    </v-card>
</div>
</template>

<script>
import ProductSummaryCard from './ProductSummaryCard'
export default {
      components: {
        ProductSummaryCard
      },
     data () {
      return {
        projectName: 'Project Name',
        intervalUsed: {},
        intervalRemaining: {},
        valueUsed: 0,
        valueRemaining: 0,
        value: 0
      }
      
    },
    beforeDestroy () {
      clearInterval(this.interval)
    },
    mounted () {
      // this.interval = setInterval(() => {
      //   if (this.value === 100) {
      //     return (this.value = 0)
      //   }
      //   this.value += 10
      // }, 1000),

      this.intervalUsed = setInterval(() => {
        if (this.valueUsed === 100) {
          return (this.valueUsed = 0)
        }
        this.valueUsed += 2
      }, 2500)

      this.intervalRemaining = setInterval(() => {
        if (this.valueRemaining === 100) {
          return (this.valueRemaining = 0)
        }
        this.valueRemaining += 1
      }, 2500)
    }
};
</script>

<style scoped>
p {
  color: black;
}
</style>