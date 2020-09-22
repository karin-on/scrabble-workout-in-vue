<template>
  <section class="correct-words">
    <h2 class="correct-words__title">Poprawne słowa to:</h2>
    <p class="correct-words__par">słowo, słowo, słowo</p>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CorrectWords extends Vue {}
</script>
