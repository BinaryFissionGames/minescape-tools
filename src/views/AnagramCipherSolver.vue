<template>
  <div id="anagram-outer">
    <div class="content-container anagram-element">
      <AnagramSolver />
    </div>
    <div class="content-container anagram-element">
      <CipherSolver />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AnagramSolver from "@/components/AnagramSolver.vue";
import CipherSolver from "@/components/CipherSolver.vue";
@Component({
  components: { AnagramSolver, CipherSolver }
})
export default class AnagramCipherSolver extends Vue {}
</script>
<style scoped>
#anagram-outer {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.anagram-element {
  width: 450px;
  height: 300px;
}
</style>
