<template>
  <ul class="tiles">
    <Tile v-for="(n, index) in 7" :key="index" :letter="`${n}`" />
  </ul>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import Tile from './Tile.vue';

@Component({
  components: {
    Tile,
  },
})
export default class Tiles extends Vue {}
</script>
