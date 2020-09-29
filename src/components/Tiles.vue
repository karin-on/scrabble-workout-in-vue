<template>
  <ul class="tiles">
    <Tile
      v-for="(letter, i) in letters"
      :key="letter.id"
      :letter="letter"
      :index="i"
    />
  </ul>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { LetterObject } from '@/models';
import Tile from './Tile.vue';

@Component({
  components: {
    Tile,
  },
})
export default class Tiles extends Vue {
  @Prop({ required: true, type: Array })
  letters!: LetterObject[];
}
</script>
