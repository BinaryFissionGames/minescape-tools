<template>
  <div>
    <h3>Anagram Solver:</h3>
    <input v-model="anagramText" placeholder="enter anagram" />
    <p
      class="solution-output"
      v-if="!!anagramSolution"
      v-html="anagramSolution"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { solveAnagram } from "@/logic/anagram/solver";
import { getMapLinkForLocation } from "@/logic/util/misc";

@Component
export default class AnagramSolver extends Vue {
  anagramText = "";
  get anagramSolution() {
    const solution = solveAnagram(this.anagramText);
    if (solution === null) {
      return null;
    }
    const minescapeMapLinkHref = getMapLinkForLocation(solution.location);
    return (
      `<a href="${minescapeMapLinkHref}" target="_blank">` +
      solution.name +
      "</a>, " +
      solution.locationDesc +
      "."
    );
  }
}
</script>

<style>
.solution-output > a {
  color: #26a69a;
}
</style>
