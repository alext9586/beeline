<template>
  <div class="spinner-container">
    <div>{{currentValue}}</div>
    <button v-on:click="spin">Spin</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: mapState("spin", ["currentValue"]),
  methods: mapActions("spin", ["spin"])
};
</script>

<style scoped>
</style>
