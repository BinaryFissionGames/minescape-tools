<template>
  <div class="fullScreened">
    <LightBox />
  </div>
</template>
<script>
import { Component, Vue } from "vue-property-decorator";
import LightBox from "../components/LightBox";

@Component({
  components: { LightBox }
})
export default class LightBoxSolver extends Vue {}
</script>
