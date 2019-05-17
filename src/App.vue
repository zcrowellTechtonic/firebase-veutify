<template>
  <div id="app">
      <Navigation v-if="currentUser"></Navigation>
      <router-view v-if="!currentUser"/>
    </div>
  
</template>

<script>
// import firebase from 'firebase'
import Navigation from './components/Navigation'
// const currentUser = firebase.auth().currentUser
import { mapState } from 'vuex'
// import Navigation from './components/Navigation'
export default {
  components: { Navigation },
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a {
  margin: 30px;
}
</style>