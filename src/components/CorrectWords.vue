<template>
  <section class="correct-words">
    <h2 class="correct-words__title">{{ message }}</h2>
    <p class="correct-words__par">{{ correctWords }}</p>
  </section>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { store } from '@/main';

@Component
export default class CorrectWords extends Vue {
  @Prop({ required: true, type: String })
  answer!: string;

  @Prop({ required: true, type: Boolean })
  answerIsCorrect!: boolean;

  get wordForm(): string {
    if ((this.answerIsCorrect && store.correctWords.length > 2)
      || (!this.answerIsCorrect && store.correctWords.length > 1)) {
      return 'słowa';
    }

    return 'słowo';
  }

  get correctWords(): string {
    const wordsToDisplay: string[] = [...store.correctWords];
    if (this.answerIsCorrect) {
      const index = wordsToDisplay.findIndex(word => word === this.answer);
      wordsToDisplay.splice(index, 1);
    }

    return wordsToDisplay.join(', ');
  }

  get message(): string {
    if (this.answerIsCorrect && store.correctWords.length === 1) {
      return 'Brak innych możliwych odpowiedzi';
    }

    return this.answerIsCorrect
      ? `Inne poprawne ${this.wordForm} to:`
      : `Poprawne ${this.wordForm} to:`;
  }
}
</script>
