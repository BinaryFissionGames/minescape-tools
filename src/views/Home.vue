<template>
  <ContentCard>
    <h1 class="home-header">Welcome to Minescape Tools!</h1>
    <p>
      This site holds a collection of utils I've created to help with various
      aspects of
      <a class="link" href="https://minescape.net"
        >Minescape (https://minescape.net)</a
      >.
    </p>
    <p>
      If you find any issues or have any suggestions, please feel free to
      contact me on Discord (BinaryFissionGames#6410).
    </p>
    <br />
    <br />
    <div>
      <h2>Changelog:</h2>
      <p>05/02/2021</p>
      <ul class="changelog-list">
        <li>
          Added color scheme options (and ditched old cruddy color scheme)
        </li>
        <li>Initial skill calculator prototype (WIP)</li>
        <li>
          Open sourced code ( see the
          <a
            class="link"
            href="https://github.com/BinaryFissionGames/minescape-tools"
            >GitHub repo here</a
          >!)
        </li>
      </ul>
    </div>
  </ContentCard>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ContentCard from "@/components/structure/ContentCard.vue";
@Component({
  components: { ContentCard }
})
export default class Home extends Vue {}
</script>
<style scoped>
.home-header {
  margin-top: 25px;
  margin-bottom: 50px;
}

.changelog-list > li {
  list-style-type: disc;
  margin-left: 50px;
  text-align: left;
}
</style>
