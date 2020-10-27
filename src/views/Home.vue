<template>
  <div class="home">
    <h1>Welcome to Minescape Tools!</h1>
    <p>
      This site holds a collection of utils I've created to help with various
      aspects of
      <a class="link" href="https://minescape.net"
        >Minescape (https://minescape.net)</a
      >. Currently, it only holds a solver for light box puzzles.
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
