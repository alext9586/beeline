<template>
  <div class="home">
    <h1>Beeline</h1>
    <SpinnerContainer/>
    <OptionContainer/>
  </div>
</template>

<script>
import SpinnerContainer from "@/components/SpinnerContainer.vue";
import OptionContainer from "@/components/OptionContainer.vue";

export default {
  name: "home",
  components: {
    SpinnerContainer,
    OptionContainer
  }
};
</script>
