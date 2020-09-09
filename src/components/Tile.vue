<template>
  <li class="tiles__tile" :class="`-tile-${letter}`">
    {{ letter }}
  </li>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

const TileProps = Vue.extend({
  props: {
    letter: String,
  },
});

@Component
export default class Tile extends TileProps {}
</script>
