<template>
  <div id="anagram-outer">
    <ContentCard class="anagram-element">
      <AnagramSolver />
    </ContentCard>
    <ContentCard class="anagram-element">
      <CipherSolver />
    </ContentCard>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AnagramSolver from "@/components/AnagramSolver.vue";
import CipherSolver from "@/components/CipherSolver.vue";
import ContentCard from "@/components/structure/ContentCard.vue";
@Component({
  components: { AnagramSolver, CipherSolver, ContentCard }
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
