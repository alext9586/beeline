<template>
  <div class="history-container">
    <h1>History</h1>
    <div v-for="option in history" :key="option.id">{{option.value}}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState("option", ["history"])
};
</script>

<style scoped>
</style>
