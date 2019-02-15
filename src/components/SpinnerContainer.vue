<template>
  <div class="spinner-container">
    <div class="slot-window">
      <div v-if="spinning" class="reel">
        <h1>{{currentValue}}</h1>
      </div>
      <div v-else class="reel-stop">
        <h1>{{currentValue}}</h1>
      </div>
    </div>
    <div>{{spinning}}</div>
    <div>{{currentValue}}</div>
    <button v-on:click="spin">Spin</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    spinOptions() {
      if (this.options.length) {
        let lastOption = {
          id: Math.max(...this.options.map(o => o.id)) + 1,
          value: this.options[0].value
        };
        return [...this.options, lastOption];
      }
      return [];
    },
    ...mapState("spin", ["currentValue", "options", "spinning"])
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

.reel,
.reel-stop {
  position: absolute;
  left: 0;
  top: 0;
  width: 300px;
}

.reel {
  animation: slideshow 0.5s linear infinite;
  filter: blur(2px);
}

.reel-stop {
  animation: slideshow-stop 2.5s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
}

.reel > h1,
.reel-stop > h1 {
  height: 50px;
  margin: 0;
  margin-top: 5px;
}

@keyframes slideshow {
  0% {
    top: 100%;
  }
  100% {
    top: -100%;
  }
}

@keyframes slideshow-stop {
  0% {
    top: 100%;
  }
  100% {
    top: 0%;
  }
}
</style>
