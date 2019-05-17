<template>
  <div>
    <v-toolbar class="layout justify-center">
      <v-toolbar-title>VELOCITY</v-toolbar-title>
    </v-toolbar>

      <v-layout class="mt-4" text-xs-center wrap>
        <v-flex mb-4 ma-2>
      <v-btn fab dark small v-on:click="toggleColorMinus" color="grey">
        <v-icon dark>remove</v-icon>
      </v-btn>
        </v-flex>
        <v-flex mb-4 ma-2>
          <div id="velocityCounter" class="counter-background-velocity display-2" >{{ counter }}</div>
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
  data() {
    return {
      counter: 15,
      name: 'Zach'
    };
  },
    methods: {
    toggleColorAdd: function () {
      // `this` inside methods point to the Vue instance
      this.counter += 1

      if(this.counter > 15){
          let veloCounter = document.getElementById('velocityCounter')
      veloCounter.style.backgroundColor = '#FFB300';
      } 


      if(this.counter > 18){
      let veloCounter = document.getElementById('velocityCounter')
      veloCounter.style.backgroundColor = '#F44336';
      }
      
    },
    toggleColorMinus: function () {
      // `this` inside methods point to the Vue instance
      this.counter -= 1

      if(this.counter < 18){
          let veloCounter = document.getElementById('velocityCounter')
      veloCounter.style.backgroundColor = '#FFB300';
      }

      if(this.counter < 15){
          let veloCounter = document.getElementById('velocityCounter')
      veloCounter.style.backgroundColor = '#4CAF50';
      }


      // if(this.counter > 18){
      // let veloCounter = document.getElementById('velocityCounter')
      // veloCounter.style.backgroundColor = '#F44336';
      // }
      
    }
  }
};
</script>

<style>
.counter-background-velocity {
  background-color: #4CAF50;
  color: white;
  border-radius: 50px;
  box-shadow: 1px 2px 3px grey;
}
</style>