<template>
  <div class="spinner-container">
    <div class="slot-window">
      <div v-bind:class="reelClass">
        <h1>{{currentValue}}</h1>
      </div>
    </div>
    <div>{{spinState}}</div>
    <div>{{currentValue}}</div>
    <button v-on:click="spin">Spin</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    reelClass() {
      return "reel-" + this.spinState;
    },
    ...mapState("spin", ["currentValue", "options", "spinState"])
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

.reel-spin,
.reel-start,
.reel-stop {
  position: absolute;
  left: 0;
  top: 0;
  width: 300px;
}

.reel-spin {
  animation: slideshow 0.25s linear infinite;
  text-shadow: 0 8px gray;
  filter: blur(1px);
}

.reel-start,
.reel-stop {
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
}

.reel-start {
  animation: slideshow-start 1s;
}

.reel-stop {
  animation: slideshow-stop 2.5s;
}

.reel-spin > h1,
.reel-start > h1,
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

@keyframes slideshow-start {
  0% {
    top: 0%;
  }
  50% {
    top: 30%;
  }
  100% {
    top: -100%;
  }
}

@keyframes slideshow-stop {
  0% {
    top: 100%;
  }
  50% {
    top: -10%;
  }
  100% {
    top: 0%;
  }
}
</style>
