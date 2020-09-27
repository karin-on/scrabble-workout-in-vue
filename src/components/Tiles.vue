<template>
  <ul class="tiles">
    <Tile
      v-for="({ id, value }, i) in letters"
      :key="id"
      :letter="value"
      :index="i"
    />
  </ul>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { LetterObject } from '@/models/letters';
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
