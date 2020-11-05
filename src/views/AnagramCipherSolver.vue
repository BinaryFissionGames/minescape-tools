<template>
  <div id="anagram-outer">
    <div class="anagram-element blue-grey darken-2">
      <AnagramSolver />
    </div>
    <div class="anagram-element blue-grey darken-2">
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
  min-width: 350px;
  max-width: 500px;
  height: 300px;
  padding: 15px 50px 15px 50px;
  border-radius: 15px;
  margin: 25px;
}
</style>
