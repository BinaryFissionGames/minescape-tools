<template>
  <img
    v-if="isOn"
    class="light-img"
    src="../assets/light_on.png"
    alt="light on"
    draggable="false"
    @mousedown="lightOff"
    @mouseover="mouseOverOff"
  />
  <img
    v-else
    class="light-img"
    src="../assets/light_off.png"
    alt="light off"
    draggable="false"
    @mousedown="lightOn"
    @mouseover="mouseOverOn"
  />
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import {
  MUTATION_LIGHT_BOX_ADD_LAST_DRAGGED_OVER,
  MUTATION_TURN_OFF_LIGHT,
  MUTATION_TURN_ON_LIGHT
} from "@/store/mutations";
import { LightId, lightsEqual } from "@/logic/lightbox/types";
import { STEP_INFO } from "@/logic/lightbox/state_info";

@Component
export default class LightBoxLight extends Vue {
  @Prop() readonly row!: number;
  @Prop() readonly col!: number;
  get isOn() {
    const step = this.$store.state.lightBoxState.currentStep;
    const index = STEP_INFO[step].lightArrayIndex;
    if (index !== null) {
      return this.$store.state.lightBoxState.lightStates[index][this.row][
        this.col
      ];
    } else {
      return false;
    }
  }

  lightOn() {
    this.$store.commit(MUTATION_TURN_ON_LIGHT, {
      row: this.row,
      col: this.col
    });
    this.$store.commit(MUTATION_LIGHT_BOX_ADD_LAST_DRAGGED_OVER, {
      row: this.row,
      col: this.col
    });
  }

  lightOff() {
    this.$store.commit(MUTATION_TURN_OFF_LIGHT, {
      row: this.row,
      col: this.col
    });
    this.$store.commit(MUTATION_LIGHT_BOX_ADD_LAST_DRAGGED_OVER, {
      row: this.row,
      col: this.col
    });
  }

  mouseOverOn() {
    const state = this.$store.state;
    const alreadyDraggedOver = state.lightBoxState.dragInfo.lastToggled.reduce(
      (prev: boolean, cur: LightId) =>
        prev || lightsEqual({ row: this.row, col: this.col }, cur),
      false
    );
    if (state.lightBoxState.dragInfo.isDragging && !alreadyDraggedOver) {
      this.$store.commit(MUTATION_TURN_ON_LIGHT, {
        row: this.row,
        col: this.col
      });
      this.$store.commit(MUTATION_LIGHT_BOX_ADD_LAST_DRAGGED_OVER, {
        row: this.row,
        col: this.col
      });
    }
  }

  mouseOverOff() {
    const state = this.$store.state;
    const alreadyDraggedOver = state.lightBoxState.dragInfo.lastToggled.reduce(
      (prev: boolean, cur: LightId) =>
        prev || lightsEqual({ row: this.row, col: this.col }, cur),
      false
    );
    if (state.lightBoxState.dragInfo.isDragging && !alreadyDraggedOver) {
      this.$store.commit(MUTATION_TURN_OFF_LIGHT, {
        row: this.row,
        col: this.col
      });
      this.$store.commit(MUTATION_LIGHT_BOX_ADD_LAST_DRAGGED_OVER, {
        row: this.row,
        col: this.col
      });
    }
  }
}
</script>

<style scoped>
.light-img {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 32px;
  height: 32px;
}
@media (min-width: 700px) {
  .light-img {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 64px;
    height: 64px;
  }
}
</style>
