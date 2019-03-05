<template>
  <div class="home">
    <h1>Beeline</h1>
    <SpinnerContainer/>
    <OptionContainer/>
    <HistoryContainer/>
  </div>
</template>

<script>
import SpinnerContainer from "@/components/SpinnerContainer.vue";
import OptionContainer from "@/components/OptionContainer.vue";
import HistoryContainer from "@/components/HistoryContainer.vue";
import { mapActions } from "vuex";

export default {
  name: "home",
  components: {
    SpinnerContainer,
    OptionContainer,
    HistoryContainer
  },
  created() {
    this.hydrate();
  },
  methods: mapActions("option", ["hydrate"])
};
</script>
