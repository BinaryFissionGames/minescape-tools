<template>
  <div class="resultView">
    <h4>Result View</h4>
    <div v-if="result && result.display">
      <h4>Parameters:</h4>
      <p>
        Doing task <b>{{ taskName }}</b>
      </p>
      <p>
        From <b>{{ result.startXp }}</b> XP to <b>{{ result.endXp }}</b> XP
      </p>
      <p>
        {{
          result.accountForSubtasks
            ? "Accounting for subtasks"
            : "Not accounting for subtasks"
        }}
      </p>
      <p>{{ result.dxp ? "On DXP" : "Without DXP" }}</p>
      <h4>Result:</h4>
      <p>
        <b>{{ result.iterations }}</b> iterations of task
        <b>{{ taskName }}</b> is required.
      </p>
      <div v-if="result.resourcesUsed.length > 0">
        <h5 v-if="!result.accountForSubtasks">Resources required:</h5>
        <h5 v-else>Base Tasks/Resources:</h5>
        <div>
          <p v-for="res of this.result.resourcesUsed" :key="res.name">
            {{ res.name }} x{{ res.quantity }}
          </p>
        </div>
      </div>
      <div v-if="this.result.resourcesGained.length > 0">
        <h5>Resources gained:</h5>
        <div>
          <p v-for="res of this.result.resourcesGained" :key="res.name">
            {{ res.name }} x{{ res.quantity }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Prop } from "vue-property-decorator";
import { SkillCalculatorResultDisplayInfo } from "@/logic/skill_calculator/types";
import Component from "vue-class-component";

@Component({})
export default class SkillCalculatorResultView extends Vue {
  @Prop({}) readonly result!: SkillCalculatorResultDisplayInfo;

  get taskName() {
    return this.result?.task.humanReadableName
      ? this.result?.task.humanReadableName
      : this.result?.task.name;
  }
}
</script>

<style scoped>
.resultView {
  font-size: 14px;
  text-align: left;
}

.resultView > h4 {
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
}
</style>
