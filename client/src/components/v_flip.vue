<template>
  <div ref="tick">
    <div class="tick__item" data-repeat="true" data-layout="horizontal" >
      <div data-key="value" data-repeat="true" data-transform="pad(00) -> split -> delay">
        <span data-view="flip"></span>
      </div>
    </div>
  </div>
</template>

<script>
import Tick from "@pqina/flip";
//import "@pqina/flip/dist/flip.min.css";

export default {
  props: {
    date: { type: String },
    time: { type: String },
  },
  data() {
    return {
      tick: null,
      counter: null,
    };
  },
  mounted() {
    this.counter = Tick.count.down(`${this.date}T${this.time}:00`);
          this.tick = Tick.DOM.create(this.$refs.tick, {
          value: this.counter.value,
    });
    this.counter.onupdate = (value) => {
      this.tick.value = value;
    };
  },
};
</script>


