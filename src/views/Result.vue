<template>
  <main class="view -result">
    <Answer />
    <ResultMessage />
    <CorrectWords />
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
    CorrectWords,
    PlayAgain,
    ResultMessage,
  },
})
export default class Result extends Vue {}
</script>
