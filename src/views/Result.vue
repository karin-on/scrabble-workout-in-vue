<template>
  <main class="view -result">
    <Answer />
    <ResultMessage />
    <OtherWords />
    <PlayAgain />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {
  Answer,
  CorrectWords,
  PlayAgain,
  ResultMessage,
} from '../components';

@Component({
  components: {
    Answer,
    OtherWords: CorrectWords,
    PlayAgain,
    ResultMessage,
  },
})
export default class Result extends Vue {}
</script>
