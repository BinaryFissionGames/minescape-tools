<template>
  <div class="full-display">
    <div class="full-table-div blue-grey darken-2">
      <table class="light-box-table" draggable="false">
        <tr
          v-for="row in 6"
          :key="row"
          :class="tableRowClass(parseInt(row) - 1)"
          draggable="false"
        >
          <td v-for="col in 6" :key="col" draggable="false">
            <LightBoxLight :row="parseInt(row) - 1" :col="parseInt(col) - 1" />
          </td>
        </tr>
      </table>

      <div class="light-box-controls">
        <button
          :disabled="!resetEnabled"
          @click="reset"
          class="waves-effect waves-light btn"
        >
          Reset
        </button>
        <button
          :disabled="!clearEnabled"
          @click="resetStep"
          class="waves-effect waves-light btn"
        >
          Clear
        </button>
        <button
          :disabled="!prevStepEnabled"
          @click="prevStep"
          class="waves-effect waves-light btn"
        >
          Back
        </button>
        <button
          :disabled="!nextStepEnabled"
          @click="nextStep"
          class="waves-effect waves-light btn"
        >
          {{ nextStepButtonText }}
        </button>
      </div>
    </div>
    <div class="instruction-display blue-grey darken-2">
      <p>{{ currentStepDisplayText }}</p>
    </div>
    <div class="light-box-instructions blue-grey darken-2">
      <h2 class="light-box-instructions-header">Instructions</h2>
      <p>
        To toggle a light, click on it. Click and drag to toggle multiple lights
        at once.
      </p>
      <p>
        Press Enter to enter keyboard entry mode. While in keyboard entry mode,
        press a number 1-6 to toggle the corresponding light. Press
        Enter/ArrowDown to go to the next row, or press Backspace/ArrowUp to go
        to the previous row. Press the delete or end key to exit keyboard entry
        mode.
      </p>
      <p>
        After you have entered the state of the light box, press "Next" to
        proceed to the next step. Use the "Back" button to go back a step. Use
        the "Clear" button to turn off all the lights. Use the "Reset" button to
        start back at the beginning.
      </p>
      <p>
        If you reach the end and the puzzle cannot be solved, you may use the
        "Verify" button to recheck and reenter states from previous steps.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import LightBoxLight from "@/components/LightBoxLight.vue";
import {
  MUTATION_LIGHT_BOX_NEXT_STEP,
  MUTATION_LIGHT_BOX_PREV_STEP,
  MUTATION_LIGHT_BOX_RESET_STEP,
  MUTATION_RESET_LIGHT_BOX
} from "@/store/mutations";
import { STEP_INFO } from "@/logic/lightbox/state_info";
import { LightBoxStep } from "@/types/state";

@Component({
  components: { LightBoxLight }
})
export default class LightBox extends Vue {
  get currentStepDisplayText() {
    return STEP_INFO[
      this.$store.state.lightBoxState.currentStep
    ].getDisplayText(this.$store.state);
  }

  nextStep() {
    this.$store.commit(MUTATION_LIGHT_BOX_NEXT_STEP);
  }

  reset() {
    this.$store.commit(MUTATION_RESET_LIGHT_BOX);
  }

  resetStep() {
    this.$store.commit(MUTATION_LIGHT_BOX_RESET_STEP);
  }

  prevStep() {
    this.$store.commit(MUTATION_LIGHT_BOX_PREV_STEP);
  }

  tableRowClass(row: number) {
    if (
      this.$store.state.lightBoxState.keyboardEntryInfo.inEntryMode &&
      this.$store.state.lightBoxState.keyboardEntryInfo.curRow == row
    ) {
      return "selected-row";
    } else {
      return "";
    }
  }

  get resetEnabled() {
    return this.$store.state.lightBoxState.currentStep !== LightBoxStep.Initial;
  }

  get clearEnabled() {
    return (
      this.$store.state.lightBoxState.currentStep !== LightBoxStep.DisplayResult
    );
  }

  get nextStepEnabled() {
    //TODO: Disable next step if answer was computed and found to be valid on display result step
    return (
      STEP_INFO[this.$store.state.lightBoxState.currentStep].nextStep !== null
    );
  }

  get prevStepEnabled() {
    return (
      STEP_INFO[this.$store.state.lightBoxState.currentStep].prevStep !== null
    );
  }

  get nextStepButtonText() {
    return this.$store.state.lightBoxState.currentStep ===
      LightBoxStep.DisplayResult
      ? "Verify"
      : "Next";
  }
}
</script>

<style scoped>
.instruction-display {
  padding: 10px 20px 0 20px;
  width: 400px;
  box-sizing: border-box;
  font-size: 30px;
  border-radius: 25px;
  margin: 25px;
}

.light-box-table > tr > td {
  text-align: center;
}

.light-box-table {
  width: 300px;
  margin: auto;
  collapse: none;
  border-collapse: separate;
}
@media (min-width: 700px) {
  .light-box-table {
    width: 600px;
    margin: auto;
  }
}

.full-display {
  display: flex;
  justify-content: space-around;
  padding: 0;
  flex-wrap: wrap;
}

.light-box-controls {
  margin-top: 25px;
  display: flex;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
}

.selected-row td {
  border-top-style: solid;
  border-bottom-style: solid;
  border-left-style: none;
  border-right-style: none;
  border-color: #1f1f1f;
  border-width: 1px;
  border-radius: 0;
}

.selected-row > :first-child {
  border-top-left-radius: 25%;
  border-bottom-left-radius: 25%;
  border-left-style: solid;
}

.selected-row > :last-child {
  border-bottom-right-radius: 25%;
  border-top-right-radius: 25%;
  border-right-style: solid;
}

.full-table-div {
  padding: 25px;
  border-radius: 25px;
  margin: 25px;
}

.light-box-instructions-header {
  margin-bottom: 40px;
  margin-top: 20px;
  text-align: center;
}

.light-box-instructions {
  border-radius: 25px;
  margin: 25px;
  padding: 35px;
  text-align: justify;
}
</style>
