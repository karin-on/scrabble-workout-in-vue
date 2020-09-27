<template>
  <li class="tiles__tile" :class="`-tile-${index + 1}`">
    {{ letter.toUpperCase() }}
  </li>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Tile extends Vue {
  @Prop({ required: true, type: String })
  letter!: string;

  @Prop({ required: true, type: Number })
  index!: number;
}
</script>
