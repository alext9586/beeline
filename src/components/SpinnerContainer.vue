<template>
  <div class="spinner-container">
    <div class="slot-window">
      <div class="reel">
        <h1 v-for="option in spinOptions" :key="option.id">{{option.value}}</h1>
      </div>
    </div>
    <div>{{currentValue}}</div>
    <button v-on:click="spin">Spin</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    spinOptions() {
      if(this.options.length) {
        let lastOption = {
          id: Math.max(...this.options.map(o => o.id)) + 1,
          value: this.options[0].value
          };
        return [...this.options, lastOption];
      }
      return [];
    },
    ...mapState("spin", ["currentValue", "options"])
    },
  methods: mapActions("spin", ["spin"])
};
</script>

<style scoped>
.slot-window {
  position: relative;
  overflow: hidden;
  height: 50px;
  width: 300px;
  border: 1px solid black;
}

.reel {
  position: absolute;
  left: 0;
  top: 0;
  width: 300px;
  animation: slideshow 0.5s linear infinite;
}

.reel > h1 {
  height: 50px;
}

@keyframes slideshow {
  0%    { top: 0%; }
  100%  { top: -800%; }
}
</style>
