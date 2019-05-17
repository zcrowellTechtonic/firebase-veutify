<template>
<v-content>
   
  <v-app id="inspire" dark>
    <!-- START OF TOOLBAR -->
      <v-toolbar fixed app>
      <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon> -->
      <!-- <v-toolbar-title>Dashboard</v-toolbar-title> -->
      <img class="logo-size" src="../assets/tglogo.png">
      <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down mb-3">
      <v-btn flat><router-link to="/">Risk Dashboard</router-link></v-btn>
      <v-btn flat><router-link to="/projectinfo">Project Info</router-link></v-btn>
      <v-btn flat><router-link to="/chartjs">Vue Charts</router-link></v-btn>
      <v-btn flat @click="logout"><router-link to="/">Logout</router-link></v-btn>
    </v-toolbar-items>
    </v-toolbar>
    <!-- END OF TOOLBAR -->
    
    <!-- END OF NAV DRAWER -->

    <!-- WHERE THE VIEWS USING ROUTER LINK ARE RENDERED -->
    <router-view v-if="currentUser"/>
    <!-- WHERE THE VIEWS USING ROUTER LINK ARE RENDERED -->

    <!-- START OF FOOTER -->
    <v-footer app color="grey darken-4">
        <v-spacer />
        <span
        v-for="link in links"
        :key="link.name"
      >
        <a
          :href="link.Link"
          class="tertiary--text footer-links">{{ link.name }}</a>
      </span>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
    <!-- END OF FOOTER  -->
  </v-app>
</v-content>


      <!-- <li><router-link to="dashboard">Dogs</router-link></li>
                    <li><router-link to="helloworld">Dashboard</router-link></li>
                    <li><router-link to="settings">Settings</router-link></li>
                    <li><a @click="logout">logout</a></li> -->
</template>





<script>

import { mapState } from 'vuex'
const fb = require('../firebaseConfig.js')

export default {
  logo: {
    src: '../assets/tglogo.png'
  },
   computed: {
    ...mapState(['currentUser'])
  },
     data: () => ({
      drawer: false
    }),
    props: {
      source: String
    },
  methods: {
    logout () {
      fb.auth.signOut().then(() => {
        this.$store.dispatch('clearData')
        this.$router.push('/login')
        window.location.reload(true)
      }).catch(err => {
        alert('Oops. ' + err)
      })
    }
  }
}
</script>

<style scoped>
.logo-size {
  height: 3.5em;
}
a {
  text-decoration: none;
  color: #f5f5f5 !important;
}
</style>
