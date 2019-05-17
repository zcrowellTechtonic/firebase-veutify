<template>
    <div>
         <v-toolbar class="layout justify-center">
              <v-toolbar-title  dark>QA REPORT</v-toolbar-title> 
            </v-toolbar>
        <!-- <v-container> -->
       <v-content color="grey darken-3">
                <QAChart></QAChart>
         </v-content>
          
    <!-- </v-container> -->
    </div>
</template>

<script>
import QAChart from './charts/QAChart'
    export default {
        components: {
            QAChart
        },
        data(){
            return{
             
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>