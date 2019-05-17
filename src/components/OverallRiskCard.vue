<template>

  <div>
    <v-toolbar class="layout justify-center">
      <v-toolbar-title>OVERALL RISK</v-toolbar-title>
    </v-toolbar>

      <v-layout class="mt-4" text-xs-center wrap>
        <v-flex mb-4 ma-2>
      <v-btn fab dark small v-on:click="toggleColorMinus" color="grey">
        <v-icon dark>remove</v-icon>
      </v-btn>
        </v-flex>
        <v-flex mb-4 ma-2>
          <div id="riskCounter" color="red" class="counter-background-risk display-2">{{ counter }}</div>
        </v-flex>
        <v-flex mb-4 ma-2>
            <v-btn fab dark small v-on:click="toggleColorAdd" color="grey">
        <v-icon dark>add</v-icon>
      </v-btn>
        </v-flex>
      </v-layout>
  </div>

</template>

<script>
    export default {
        data(){
          return {
            counter: 10
          }
        },
         methods: {
    toggleColorAdd: function () {
      // `this` inside methods point to the Vue instance
      this.counter += 1
      if(this.counter > 15){
          let riskCount = document.getElementById('riskCounter')
      riskCount.style.backgroundColor = '#FFB300';
      } 
      if(this.counter > 18){
      let riskCount = document.getElementById('riskCounter')
      riskCount.style.backgroundColor = '#F44336';
      }
      
    },
    toggleColorMinus: function () {
      // `this` inside methods point to the Vue instance
      this.counter -= 1
      if(this.counter < 18){
          let riskCount = document.getElementById('riskCounter')
      riskCount.style.backgroundColor = '#FFB300';
      }
      if(this.counter < 15){
          let riskCount = document.getElementById('riskCounter')
      riskCount.style.backgroundColor = '#4CAF50';
      }
    }
  }
    }
</script>

<style>
.counter-background-risk {
  background-color: #4CAF50;
  color: white;
  border-radius: 50px;
  box-shadow: 1px 2px 3px grey;
}
</style>