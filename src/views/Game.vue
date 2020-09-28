<template>
  <main class="view -game">
    <Timer />
    <LetterSlots :currentAnswer="currentAnswer" />
    <Backspace />
    <Tiles :letters="letters" />
    <router-link :to="{ name: 'result' }" class="button -filled game__submit">sprawdź</router-link>
  </main>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { eventBus } from '@/main';
import { generateId, getRandomArrayElement, shuffleAnArray } from '@/helpers';
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

  currentAnswer: LetterObject[] = [];

  created(): void {
    const letters = getRandomArrayElement(words)[0]
      .split('')
      .map((letter: string, index: number): LetterObject => ({
        id: generateId(),
        value: letter,
        active: true,
      }));

    this.letters = shuffleAnArray(letters);

    eventBus.$on('letterClicked', (id: string): void => {
      this.handleLetterSelection(id);
    });
  }

  handleLetterSelection(letterId: string): void {
    this.toggleLetterActiveState(letterId);
    const selectedLetter: LetterObject = this.letters
      .find(({ id }) => id === letterId)!;

    this.currentAnswer = [...this.currentAnswer, selectedLetter];
  }

  toggleLetterActiveState(letterId: string) {
    const letterIndex: number = this.letters
      .findIndex(({ id }) => id === letterId);
    this.letters[letterIndex].active = !this.letters[letterIndex].active;
  }
}
</script>
