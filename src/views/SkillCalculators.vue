<template>
  <div class="allCalcsDiv">
    <SkillCalculator skill-name="Herblore" v-bind:skill-tasks="herbloreTasks" />
    <SkillCalculator skill-name="Cooking" v-bind:skill-tasks="cookingTasks" />
    <SkillCalculator skill-name="Agility" v-bind:skill-tasks="agilityTasks" />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SkillCalculator from "@/components/SkillCalculator.vue";
import { HERBLORE_TASKS } from "@/data/herblore_tasks";
import { SkillCalculatorTask, Task } from "@/logic/solver/types";
import { COOKING_TASKS } from "@/data/cooking_tasks";
import { AGILITY_TASKS } from "@/data/agility_tasks";

@Component({
  components: { SkillCalculator }
})
export default class SkillCalculators extends Vue {
  herbloreTasks: Task[] = HERBLORE_TASKS;
  cookingTasks: SkillCalculatorTask[] = COOKING_TASKS;
  agilityTasks: SkillCalculatorTask[] = AGILITY_TASKS;
}
</script>

<style scoped>
.allCalcsDiv {
  max-width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
}
</style>
