<template>
  <div class="option-container">
    <RemovableOption v-for="option in options" :key="option.id" :option="option"></RemovableOption>
    <input type="text" v-model="optionToAdd.value">
    <button v-on:click="addOption">Add</button>
  </div>
</template>

<script>
import RemovableOption from "@/components/RemovableOption.vue";
import { mapState } from "vuex";

export default {
  components: {
    RemovableOption
  },
  data() {
    return {
      optionToAdd: this.createFreshOptionObject()
    };
  },
  computed: mapState("option", ["options"]),
  methods: {
    addOption() {
      this.$store
        .dispatch("option/add", this.optionToAdd)
        .then(() => {
          this.optionToAdd = this.createFreshOptionObject();
        })
        .catch(() => {});
    },
    createFreshOptionObject() {
      return {
        value: ""
      };
    }
  }
};
</script>

<style scoped>
</style>
