<template>
  <section class="answer">
    <template v-if="answerWasSubmitted">
      <h2 class="answer__title">Twoje słowo:</h2>
      <div class="answer__word">{{ answer }}</div>
    </template>
    <template v-else>
      <h2 class="answer__title">Nie ułożyłaś(eś) słowa</h2>
    </template>
  </section>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { store } from '@/main';

@Component
export default class Answer extends Vue {
  get answerWasSubmitted(): boolean {
    return !!store.answer;
  }

  get answer(): string {
    return store.answer;
  }
}
</script>
