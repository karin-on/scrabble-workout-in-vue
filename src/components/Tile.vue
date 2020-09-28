<template>
  <li
    class="tiles__tile"
    :class="`-tile-${index + 1}`"
    @click="handleTileClick"
  >
    {{ letter.value.toUpperCase() }}
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

  handleTileClick() {
    eventBus.$emit('letterClicked', this.letter.id);
  }
}
</script>
