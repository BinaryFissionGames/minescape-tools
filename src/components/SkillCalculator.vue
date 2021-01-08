<template>
  <ContentCard class="skillCalculator">
    <div class="skillCalcOptions">
      <h3>{{ skillName }} Skill Calculator</h3>
      <div>
        <label>
          <input
            name="g1"
            type="radio"
            v-bind:value="true"
            v-model="usingLevelForStart"
          />
          <span>Use level for start point</span>
        </label>
        <br />
        <label>
          <input
            name="g1"
            type="radio"
            v-bind:value="false"
            v-model="usingLevelForStart"
          />
          <span>Use XP for start point</span>
        </label>
      </div>
      <div v-if="usingLevelForStart">
        <NumberInput
          placeholder="Enter Level Value"
          v-model="levelStartInput"
          min="1"
          max="120"
          label="Start Level"
          @valid="startLevelValid = true"
          @invalid="startLevelValid = false"
        />
        <NumberInput
          label="Start XP"
          placeholder="Enter XP Value"
          :value="calculatedStartXPInput"
          min="0"
          :disabled="true"
          @valid="startXpValid = true"
          @invalid="startXpValid = false"
        />
      </div>
      <div v-else>
        <NumberInput
          placeholder="Enter Level Value"
          :value="calculatedStartLevelInput"
          min="1"
          max="120"
          label="Start Level"
          :disabled="true"
          @valid="startLevelValid = true"
          @invalid="startLevelValid = false"
        />
        <NumberInput
          label="Start XP"
          placeholder="Enter XP Value"
          v-model="xpStartInput"
          min="0"
          @valid="startXpValid = true"
          @invalid="startXpValid = false"
        />
      </div>
      <div>
        <label>
          <input
            name="g2"
            type="radio"
            v-bind:value="true"
            v-model="usingLevelForEnd"
            :disabled="!canUseLevelForEnd"
          />
          <span>Use level for end point</span>
        </label>
        <br />
        <label>
          <input
            name="g2"
            type="radio"
            v-bind:value="false"
            v-model="usingLevelForEnd"
          />
          <span>Use XP for end point </span>
        </label>
      </div>
      <div v-if="usingLevelForEnd">
        <NumberInput
          placeholder="Enter Level Value"
          v-model="levelEndInput"
          :min="levelStart + 1"
          :max="120"
          label="End Level"
          @valid="endLevelValid = true"
          @invalid="endLevelValid = false"
        />
        <NumberInput
          label="End XP"
          placeholder="Enter XP Value"
          :value="calculatedEndXPInput"
          min="0"
          :disabled="true"
          @valid="endXpValid = true"
          @invalid="endXpValid = false"
        />
      </div>
      <div v-else>
        <NumberInput
          placeholder="Enter Level Value"
          :value="calculatedEndLevelInput"
          min="1"
          max="120"
          label="End Level"
          :disabled="true"
          @valid="endLevelValid = true"
          @invalid="endLevelValid = false"
        />
        <NumberInput
          label="End XP"
          placeholder="Enter XP Value"
          v-model="xpEndInput"
          :min="xpStart + 1"
          @valid="endXpValid = true"
          @invalid="endXpValid = false"
        />
      </div>
      <div>
        <label class="input-field">
          <span>Task</span>
          <select id="taskSelect" v-model="selectedTaskName">
            <option
              v-for="skillTask of skillTasks"
              :key="skillTask.name"
              :value="skillTask.name"
            >
              {{
                !!skillTask.humanReadableName
                  ? skillTask.humanReadableName
                  : skillTask.name
              }}
            </option>
          </select>
        </label>
      </div>
      <label>
        <input type="checkbox" v-model="includeSubTasks" />
        <span>Include subtasks in calculation?</span>
      </label>
      <br />
      <label>
        <input type="checkbox" v-model="dxp" />
        <span>Dxp?</span>
      </label>
      <br />
      <br />
      <button
        v-bind:disabled="!canCalculateResult"
        @click="calculateResults"
        class="waves-effect waves-light btn"
      >
        Calculate
      </button>
    </div>
    <SkillCalculatorResultView
      v-bind:result="calculatedResults"
      class="resultView content-container-within"
    />
  </ContentCard>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { SkillCalculatorTask } from "@/logic/solver/types";
import { Prop, Watch } from "vue-property-decorator";
import { getLevelForXp, getXpForLevel } from "@/logic/util/experience";
import ContentCard from "@/components/structure/ContentCard.vue";
import {
  defaultDisplayInfo,
  SkillCalculatorResultDisplayInfo
} from "@/logic/skill_calculator/types";
import { calculateSkillCalculatorResult } from "@/logic/skill_calculator/logic";
import SkillCalculatorResultView from "@/components/SkillCalculatorResultView.vue";
import M from "materialize-css";
import NumberInput from "@/components/inputs/NumberInput.vue";

@Component({
  components: { NumberInput, ContentCard, SkillCalculatorResultView }
})
export default class SkillCalculator extends Vue {
  xpStartInput = 0;
  xpEndInput = 0;
  levelStartInput = 1;
  levelEndInput = 2;
  usingLevelForStart = true;
  usingLevelForEnd = true;
  selectedTaskName = "";
  includeSubTasks = false;
  dxp = false;
  calculatedResults: SkillCalculatorResultDisplayInfo = defaultDisplayInfo;
  selectElInst: any = null;

  startLevelValid = true;
  endLevelValid = true;
  startXpValid = true;
  endXpValid = true;

  @Prop({ default: [] }) readonly skillTasks!: SkillCalculatorTask[];
  @Prop({}) readonly skillName!: string;

  @Watch("canUseLevelForEnd")
  disallowEndLevel() {
    if (!this.canUseLevelForEnd) {
      this.usingLevelForEnd = false;
    }
  }

  mounted() {
    const el = this.$el.querySelectorAll("#taskSelect");
    this.selectElInst = M.FormSelect.init(el);
  }

  unmounted() {
    if (this.selectElInst) {
      this.selectElInst.destroy();
    }
    this.selectElInst = null;
  }

  get calculatedStartXPInput() {
    return this.levelStartInput > 0 ? getXpForLevel(this.levelStartInput) : 0;
  }

  get calculatedEndXPInput() {
    return this.levelEndInput > 0 ? getXpForLevel(this.levelEndInput) : 0;
  }

  get calculatedStartLevelInput() {
    return this.xpStartInput >= 0 ? getLevelForXp(this.xpStartInput) : 1;
  }

  get calculatedEndLevelInput() {
    return this.xpEndInput >= 0 ? getLevelForXp(this.xpEndInput) : 1;
  }

  get xpStart() {
    if (this.usingLevelForStart) {
      return this.calculatedStartXPInput;
    } else {
      return this.xpStartInput;
    }
  }

  get xpEnd() {
    if (this.usingLevelForEnd) {
      return this.calculatedEndXPInput;
    } else {
      return this.xpEndInput;
    }
  }

  get levelStart() {
    if (this.usingLevelForStart) {
      return this.levelStartInput;
    } else {
      return this.calculatedStartLevelInput;
    }
  }

  get canCalculateResult() {
    if (
      !this.startXpValid ||
      !this.startLevelValid ||
      !this.endXpValid ||
      !this.endLevelValid
    ) {
      return false;
    }

    const startXp: number = this.xpStart;
    const endXp: number = this.xpEnd;

    const xpOk = startXp >= 0 && endXp >= 0 && startXp < endXp;
    const taskOk = this.selectedTaskName !== ""; // Maybe revisit this and only allow this if the task is available at start level.

    return xpOk && taskOk;
  }

  get canUseLevelForEnd() {
    return this.levelStart !== 120;
  }

  calculateResults() {
    //TODO: Validate input first (xp/level > 0, task selected, xpStart < xpEnd)
    const startXp = this.usingLevelForStart
      ? getXpForLevel(this.levelStartInput)
      : this.xpStartInput;

    const endXp = this.usingLevelForEnd
      ? getXpForLevel(this.levelEndInput)
      : this.xpEndInput;

    this.calculatedResults = Object.assign(
      calculateSkillCalculatorResult(
        this.skillTasks,
        this.selectedTaskName,
        startXp,
        endXp,
        this.includeSubTasks,
        this.dxp
      ),
      { display: true }
    );
  }
}
</script>

<style scoped>
.skillCalculator {
  display: flex;
  justify-content: space-around;
  max-height: 925px;
  max-width: 1050px;
  min-width: 850px;
}
.resultView {
  margin-left: 75px;
  overflow-y: scroll;
  /*TODO: Add another color here to have it "raised"*/
}
.skillCalcOptions {
  max-width: 600px;
  min-width: 500px;
}
</style>
