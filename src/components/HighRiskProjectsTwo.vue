<template>
  <v-card>
       <v-toolbar color="red" class="layout justify-center" dark>
          <v-toolbar-title>High Risk</v-toolbar-title>
          <v-spacer></v-spacer>
      </v-toolbar>
    <v-expansion-panel v-model="panel" dark expand>
      <v-expansion-panel-content 
        v-for="(section, n) in project"
        :value="n==currSection"
        :key="`expansion-${n}`"
        @input="onInput($event, n)"
        @focus="$emit($event, n)"
      >
        <template v-slot:header title>
          <div>
            {{section.title}}   
          </div>
           <!-- <v-badge color="cyan darken-3" class="mr-4">
               <template v-slot:badge>
                <span>9</span>
              </template>
              </v-badge> -->
        </template>
         <v-chip color="cyan darken-3">3</v-chip>
         <div  id="spinner-background-high" class="text-xs-center">
            <h2 class="mb-2">Overall Health</h2>
            <v-progress-circular
              class="circle mb-3"
              :rotate="360"
              :size="150"
              :width="20"
              :value="value"
              color="red"
            >{{ value }}</v-progress-circular>
          </div>
          <router-link to="/projectinfo">
          <v-btn>Project Details</v-btn>
          </router-link>
        <v-card>
          <v-data-table :headers="headers" :items="desserts" class="elevation-1">
            <template v-slot:items="props">
              <td>{{ props.item.name }}</td>
              <td class="text-xs-right">{{ props.item.stats}}</td>
            </template>
          </v-data-table>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-card>
</template>

<script>
export default {
  
  data() {
    return {
      interval: {},
      value: "80%",
       project: [
      {
        complete: true,
        title: "BRIGHTER VISION",

        fields: [
        ]
      },
      {
        complete: false,
        title: "HVA"
      },
      {
        complete: false,
        title: "PORTAL",
        "Info": "This is where the field set fields will go."
      },
      {
        complete: false,
        title: "CU",
        "Info": "This is where the field set fields will go."
      }
    ],
      // panel: [false, true, true]
      headers: [
        {
          text: "Metric",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Stat", 
          align: "right",
          value: "calories" }
      ],
      desserts: [
        {
          name: "Risk Rating",
          stats: "10GA"
        },
        {
          name: "Budget Used",
          stats: "23%"
        },
        {
          name: "Project Completion",
          stats: "62%"
        }
      ]
    };
  }
};
</script>

<style>
#spinner-background-high {
  background-color: rgba(92, 30, 30, 0.233);
    border: 1px solid rgb(100, 100, 100);
}
</style>