<template>
  <div class="content-container">
    <h1 class="home-header">Welcome to Minescape Tools!</h1>
    <p>
      This site holds a collection of utils I've created to help with various
      aspects of
      <a class="link" href="https://minescape.net"
        >Minescape (https://minescape.net)</a
      >.
    </p>
    <p>
      In the future, I hope to add some skill calculators, as well as other
      useful tools.
    </p>
    <p>
      If you find any issues or have any suggestions, please feel free to
      contact me on Discord (BinaryFissionGames#6410).
    </p>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {}
</script>
<style scoped>
.home-header {
  margin-top: 25px;
  margin-bottom: 50px;
}
</style>
