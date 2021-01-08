<template>
  <div class="input-field">
    <input
      :class="isValid ? 'valid' : 'invalid'"
      type="text"
      :disabled="disabled"
      v-model="internalVal"
    />
    <label class="active">{{ this.fullLabel }}</label>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

const numberRegex = /^[0-9]+$/;

@Component
export default class NumberInput extends Vue {
  @Prop({ default: 0 }) value!: number;
  @Prop() placeholder?: string;
  @Prop() min?: number;
  @Prop() max?: number;
  @Prop({ default: "Input Number" }) label!: string;
  @Prop({ default: false }) disabled!: boolean;

  private internalVal: string = this.value.toString();

  @Watch("value")
  onValueChanged() {
    //If the parent drives the value to something new, force the input to this value.
    this.internalVal = this.value.toString();
  }

  @Watch("internalVal")
  onInputChanged() {
    //Only change the parent value if it's a valid number.
    if (this.validate(this.internalVal)) {
      this.$emit("input", parseInt(this.internalVal));
      this.$emit("valid");
    } else {
      this.$emit("invalid");
    }
  }

  get fullLabel() {
    if (this.numberRangeString) {
      return `${this.label} (${this.numberRangeString})`;
    }
    return this.label;
  }

  get numberRangeString() {
    if (this.max && this.min) {
      if (this.max === this.min) {
        return `Value must be ${this.min}`;
      } else {
        return `Must be between ${this.min} and ${this.max} [inclusive]`;
      }
    } else if (this.min) {
      return `Must be equal to or greater than ${this.min}`;
    } else if (this.max) {
      return `Must be equal to or less than ${this.max}`;
    }
    return undefined;
  }

  get isValid() {
    return this.validate(this.internalVal);
  }

  validate(inputStr: string) {
    if (!inputStr.match(numberRegex)) {
      return false;
    }

    const num = parseInt(inputStr);

    if (this.min && num < this.min) {
      return false;
    }

    if (this.max && num > this.max) {
      return false;
    }

    return true;
  }
}
</script>

<style scoped></style>
