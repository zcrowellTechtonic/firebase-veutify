<template>
    <div class="text-xs-center">
    <v-bottom-sheet v-model="sheet">
      <template v-slot:activator>
        <v-btn
          color="blue-grey darken-1"
          dark
        >
          PM Summary
        </v-btn>
      </template>
     <v-card>
<v-toolbar class="layout justify-center">
<v-toolbar-title>PM SUMMARY</v-toolbar-title>
</v-toolbar>
<template>
<v-layout row>
<v-flex mb-4 ma-2>

<v-list two-line>
<template v-for="(item, index) in items">
<v-list-tile :key="index" avatar ripple @click="placeholder">
<v-list-tile-content>
<v-list-tile-title>{{ item.title }}</v-list-tile-title>
<v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
<v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
</v-list-tile-content>
<v-list-tile-action>
<v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
<v-icon color="grey lighten-1">star_border</v-icon>
</v-list-tile-action>
</v-list-tile>
<v-divider v-if="index + 1 < items.length" :key="`divider-${index}`"></v-divider>
</template>
</v-list>

</v-flex>
</v-layout>
</template>


</v-card>
    </v-bottom-sheet>
  </div>
</template>

<script>
    export default {
    data () {
      return {
        items: [
          { action: '15 min', headline: 'Lets use vue?', title: 'Ali Connors', subtitle: "Maybe we should try vue.js for this project." },
          { action: '2 hr', headline: 'Margins', title: 'Scrott, Jennifer', subtitle: "I feel like margin never look right after page load" },
          { action: '6 hr', headline: 'Color Theme', title: 'Sandra Adams', subtitle: 'What are we thinking for a color theme? I have some great ideas after visiting the ice cream shop' },
          { action: '12 hr', headline: 'Accessibility', title: 'Trevor Hansen', subtitle: 'Have we thought about everyone while developing this product?' },
          { action: '18hr', headline: 'Vuetify', title: 'Britta Holt', subtitle: "I'd really like to try and use Vuetify on this project. It's super confusing and fun"}
        ]
      }
    },
    methods: {
      placeholder: function(){
        alert('Alerts are annoying')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>