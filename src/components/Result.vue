<template>
  <div>
    <h1>Result</h1>
    <router-link :to="{ name: 'game' }">PLAY AGAIN</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Result extends Vue {}
</script>
