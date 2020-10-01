<template>
  <section class="correct-words">
    <h2 class="correct-words__title">Poprawne {{ wordForm }} to:</h2>
    <p class="correct-words__par">{{ correctWords }}</p>
  </section>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { store } from '@/main';

@Component
export default class CorrectWords extends Vue {
  get wordForm(): string {
    return this.correctWords.length > 1 ? 'słowa' : 'słowo';
  }

  get correctWords(): string {
    return store.correctWords.join(', ');
  }
}
</script>
