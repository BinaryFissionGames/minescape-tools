<template>
  <div class="content-container">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ContentCard extends Vue {}
</script>

<style scoped></style>
