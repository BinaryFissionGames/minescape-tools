<template>
  <div>
    <h3>Cipher Solver</h3>
    <input v-model="cipherText" placeholder="enter cipher text" />
    <p
      v-if="!!cipherSolution"
      v-html="cipherSolution"
      class="solution-output"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { solveCipher } from "@/logic/anagram/solver";
import { getMapLinkForLocation } from "@/logic/util/misc";

@Component
export default class CipherSolver extends Vue {
  cipherText = "";
  get cipherSolution() {
    const solution = solveCipher(this.cipherText);
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

<style scoped></style>
