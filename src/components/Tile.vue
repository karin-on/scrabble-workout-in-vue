<template>
  <li
    class="tiles__tile"
    :class="`-tile-${index + 1}`"
    @click="handleTileClick"
  >
    <button class="tiles__button" tabindex="-1" :disabled="!letter.active">
      {{ letter.value.toUpperCase() }}
    </button>
  </li>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { eventBus } from '@/main';
import { LetterObject } from '@/models';

@Component
export default class Tile extends Vue {
  @Prop({ required: true, type: Object })
  letter!: LetterObject;

  @Prop({ required: true, type: Number })
  index!: number;

  handleTileClick(): void {
    eventBus.$emit('letter-selected', this.letter.id);
  }
}
</script>
