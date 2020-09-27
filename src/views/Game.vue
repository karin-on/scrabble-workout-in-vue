<template>
  <main class="view -game">
    <Timer />
    <LetterSlots />
    <Backspace />
    <Tiles :letters="letters" />
    <router-link :to="{ name: 'result' }" class="button -filled game__submit">sprawdź</router-link>
  </main>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { drawAWord } from '@/helpers/draw-a-word';
import { shuffleAnArray } from '@/helpers/shuffle-an-array';
import { LetterObject } from '@/models/letters';
import { words } from '@/data/words';
import {
  Backspace,
  LetterSlots,
  Tiles,
  Timer,
} from '../components';


@Component({
  components: {
    Tiles,
    Timer,
    LetterSlots,
    Backspace,
  },
})
export default class Game extends Vue {
  letters: LetterObject[] = [];

  created(): void {
    const letters = drawAWord(words)[0]
      .split('')
      .map((letter: string, index: number): LetterObject => ({
        id: index,
        value: letter,
      }));

    this.letters = shuffleAnArray(letters);
  }
}
</script>
