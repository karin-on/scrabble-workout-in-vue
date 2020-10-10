<template>
  <main class="view -result">
    <Answer :answer="answer" :answerWasSubmitted="answerWasSubmitted" />
    <ResultMessage :answerIsCorrect="answerIsCorrect" />
    <CorrectWords :answerIsCorrect="answerIsCorrect" />
    <PlayAgain />
  </main>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Route } from 'vue-router';
import { Path } from '@/models';
import { store } from '@/main';
import {
  Answer,
  CorrectWords,
  PlayAgain,
  ResultMessage,
} from '../components';

Component.registerHooks([
  'beforeRouteEnter',
]);

@Component({
  components: {
    Answer,
    CorrectWords,
    PlayAgain,
    ResultMessage,
  },
})
export default class Result extends Vue {
  answer: string = '';

  beforeRouteEnter(
    to: Route,
    from: Route,
    next: <T extends Path>(name: T | void) => void,
  ) {
    if (store.answer === null) next({ name: 'home' });
    else next();
  }

  created(): void {
    this.answer = typeof store.answer === 'string' ? store.answer : '';
    store.answer = null;
  }

  get answerWasSubmitted(): boolean {
    return !!this.answer;
  }

  get answerIsCorrect(): boolean {
    return store.correctWords.includes(this.answer);
  }
}
</script>
