<template>
    <section>
 <v-layout text-xs-center wrap >
      <v-flex mb-4 ma-2>
        <BudgetCard></BudgetCard>
      </v-flex>
    </v-layout>

       <v-layout text-xs-center wrap >
      <v-flex mb-4 ma-2 grey lighten-2>
        <OverallRiskCard></OverallRiskCard>
      </v-flex>
      <v-flex mb-4 ma-2 grey lighten-2>
        <MoraleCard></MoraleCard>
      </v-flex>
      <v-flex mb-4 ma-2 grey lighten-2>
          <VelocityCard></VelocityCard>
      </v-flex>
    </v-layout>

    <v-layout wrap>
      <v-flex mb-4>
        <v-card color="grey darken-4">
          <QaCard></QaCard>
        </v-card>
      </v-flex>
    </v-layout>
  </section>
</template>
<script>
import VelocityCard from "@/components/VelocityCard";
import OverallRiskCard from "@/components/OverallRiskCard";
import BudgetCard from "@/components/BudgetCard";
import MoraleCard from "@/components/MoraleCard";
import QaCard from "@/components/QaCard";
export default {
  components: {
    VelocityCard,
    OverallRiskCard,
    BudgetCard,
    MoraleCard,
    QaCard
  }
};
</script>

<style>

</style>