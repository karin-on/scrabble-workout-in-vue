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
import { getRandomArrayElement, shuffleAnArray } from '@/helpers';
import { LetterObject } from '@/models';
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
    const letters = getRandomArrayElement(words)[0]
      .split('')
      .map((letter: string, index: number): LetterObject => ({
        id: index,
        value: letter,
      }));

    this.letters = shuffleAnArray(letters);
  }
}
</script>
