<template>
  <main class="view -game">
    <Timer />
    <LetterSlots :currentAnswer="currentAnswer" />
    <Backspace :active="!!currentAnswer.length"/>
    <Tiles :letters="letters" v-if="!submitIsVisible" />
    <Submit v-if="submitIsVisible" @submit="submit" @cancel="cancelSubmit" />
  </main>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { eventBus, store } from '@/main';
import { LetterObject } from '@/models';
import { WORD_LENGTH } from '@/static/word-length';
import { words } from '@/data/words';
import {
  generateId,
  getRandomArrayElement,
  joinLetters,
  shuffleAnArray,
} from '@/helpers';
import {
  Backspace,
  LetterSlots,
  Submit,
  Tiles,
  Timer,
} from '../components';

@Component({
  components: {
    Submit,
    Tiles,
    Timer,
    LetterSlots,
    Backspace,
  },
})
export default class Game extends Vue {
  letters: LetterObject[] = [];

  currentAnswer: LetterObject[] = [];

  submitIsVisible: boolean = false;

  created(): void {
    const drawnWords: string[] = getRandomArrayElement(words);
    store.correctWords = drawnWords;

    const letters = drawnWords[0]
      .split('')
      .map((letter: string, index: number): LetterObject => ({
        id: generateId(),
        value: letter,
        active: true,
      }));
    this.letters = shuffleAnArray(letters);

    eventBus.$on('letter-selected', (id: string): void => {
      this.handleLetterSelection(id);
    });

    eventBus.$on('letter-deleted', (): void => {
      this.handleLetterDeletion();
    });
  }

  beforeDestroy(): void {
    eventBus.$off('letter-selected');
    eventBus.$off('letter-deleted');
  }

  handleLetterSelection(letterId: string): void {
    const selectedLetter: LetterObject = this.letters
      .find(({ id }) => id === letterId)!;

    this.currentAnswer = [...this.currentAnswer, selectedLetter];
    this.toggleLetterActiveState(letterId);

    if (this.currentAnswer.length === WORD_LENGTH) {
      this.submitIsVisible = true;
    }
  }

  toggleLetterActiveState(letterId: string): void {
    const letterIndex: number = this.letters
      .findIndex(({ id }) => id === letterId);

    this.letters[letterIndex].active = !this.letters[letterIndex].active;
  }

  handleLetterDeletion(): void {
    const updatedCurrentAnswer = [...this.currentAnswer];
    const deletedLetter = updatedCurrentAnswer.pop()!;

    this.currentAnswer = updatedCurrentAnswer;
    this.toggleLetterActiveState(deletedLetter.id);
  }

  submit(): void {
    store.answer = this.currentAnswer.length === WORD_LENGTH
      ? joinLetters([...this.currentAnswer])
      : '';

    this.$router.push({ name: 'result' });
  }

  cancelSubmit(): void {
    this.submitIsVisible = false;
  }
}
</script>
