<template>
  <div>
    {{option.value}}
    <button v-on:click="remove(option)">Remove</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    option: {
      type: Object,
      required: true
    }
  },
  methods: mapActions("option", ["remove"])
};
</script>

<style scoped>
</style>
