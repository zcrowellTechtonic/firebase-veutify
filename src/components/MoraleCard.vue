 <template>
  <div>
    <v-toolbar class="layout justify-center">
      <v-toolbar-title>MORALE</v-toolbar-title>
    </v-toolbar>
   <div class="text-xs-center mt-4">
    <v-rating color="amber" v-model="rating"></v-rating>
  </div>
  </div>
</template>
 
 <script>
export default {
  data(){
    return{
      rating: 2
    }
  }
};
</script>
 
 <style lang="scss" scoped>
</style>