<template>
  <main class="view -game">
    <Timer />
    <LetterSlots />
    <Backspace />
    <Tiles />
    <router-link :to="{ name: 'result' }" class="button -filled game__submit">sprawdź</router-link>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Timer from '../components/Timer.vue';
import LetterSlots from '../components/LetterSlots.vue';
import Backspace from '../components/Backspace.vue';
import Tiles from '../components/Tiles.vue';

@Component({
  components: {
    Tiles,
    Timer,
    LetterSlots,
    Backspace,
  },
})
export default class Game extends Vue {}
</script>
