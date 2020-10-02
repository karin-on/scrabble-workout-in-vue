<template>
  <main class="view -result">
    <Answer />
    <ResultMessage :answerIsCorrect="answerIsCorrect" />
    <CorrectWords :answerIsCorrect="answerIsCorrect" />
    <PlayAgain />
  </main>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { store } from '@/main';
import {
  Answer,
  CorrectWords,
  PlayAgain,
  ResultMessage,
} from '../components';

@Component({
  components: {
    Answer,
    CorrectWords,
    PlayAgain,
    ResultMessage,
  },
})
export default class Result extends Vue {
  get answerIsCorrect(): boolean {
    return store.correctWords.includes(store.answer);
  }
}
</script>
