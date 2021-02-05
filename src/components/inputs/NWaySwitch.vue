<template>
  <div class="wrapping-div">
    <p class="option-name">{{ currentDisplayName }}</p>
    <div class="switch-div" v-on:click="advanceId">
      <span :style="switchLeverFilterStyle" class="switchlever">
        <div :style="ballPositionStyle" class="ball-before" />
        <div :style="ballPositionStyle" class="ball-after" />
      </span>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { NWaySwitchOption } from "@/types/switch";

@Component
export default class NWaySwitch extends Vue {
  @Prop() elements!: NWaySwitchOption[];
  @Prop() value!: string; // ID of the currently selected option.

  get currentDisplayName() {
    return this.elements.find(v => v.optionId === this.value)?.optionName;
  }

  get switchLeverFilterStyle() {
    const chosenElemIndex = this.elements.findIndex(
      v => v.optionId === this.value
    );
    if (chosenElemIndex < 0) {
      return {
        filter: "grayscale(0%)"
      };
    } else {
      let grayscalePercentage;
      if (this.elements.length === 0 || this.elements.length === 1) {
        grayscalePercentage = 0;
      } else {
        grayscalePercentage =
          (100 * chosenElemIndex) / (this.elements.length - 1);
        grayscalePercentage = 100 - grayscalePercentage;
      }
      return {
        filter: `grayscale(${grayscalePercentage}%)`
      };
    }
  }

  //Number of pixels the ball should be displayed at.
  //Between 0 and 18, inclusive.
  ballPosition(): number {
    const chosenElemIndex = this.elements.findIndex(
      v => v.optionId === this.value
    );

    if (
      chosenElemIndex < 0 ||
      this.elements.length === 0 ||
      this.elements.length === 1
    ) {
      return 0;
    }

    const t = chosenElemIndex / (this.elements.length - 1);

    return Math.round(t * 18);
  }

  get ballPositionStyle() {
    const position = this.ballPosition();
    return {
      left: `${position}px`
    };
  }

  advanceId() {
    const chosenElemIndex = this.elements.findIndex(
      v => v.optionId === this.value
    );
    const nextIndex = (chosenElemIndex + 1) % this.elements.length;

    this.$emit("input", this.elements[nextIndex].optionId);
  }
}
</script>
<style scoped>
.switchlever {
  content: "";
  display: inline-block;
  position: relative;
  width: 36px;
  height: 14px;
  border-radius: 15px;
  margin: 0 10px 0 10px;
  background-color: var(--highlight-color);
  transition: background-color 0.3s ease;
}

.ball-before {
  content: "";
  position: absolute;
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  top: -3px;
  transition: left 0.3s ease;
}

.ball-after {
  content: "";
  position: absolute;
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  top: -3px;
  background-color: #f1f1f1;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  transition: left 0.3s ease;
}

.option-name {
  margin: 10px 0 10px 0;
  text-align: center;
}

.switch-div {
  display: inline-block;
}

.wrapping-div {
  text-align: center;
}
</style>
