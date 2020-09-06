<template>
  <div>
    <h1>GAME</h1>
    <router-link :to="{ name: 'result' }">GAME OVER</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Game extends Vue {}
</script>
