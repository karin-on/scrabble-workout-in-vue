<template>
  <main>
    <Answer />
    <ResultMessage />
    <OtherWords />
    <PlayAgain />
    <router-link :to="{ name: 'game' }">PLAY AGAIN</router-link>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {
  Answer,
  OtherWords,
  PlayAgain,
  ResultMessage,
} from '../components';

@Component({
  components: {
    Answer,
    OtherWords,
    PlayAgain,
    ResultMessage,
  },
})
export default class Result extends Vue {}
</script>
