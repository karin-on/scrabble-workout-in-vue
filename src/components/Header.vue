<template>
  <div class="header">
    <router-link :to="{ name: 'home' }">
      Scrabble Workout
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {}
</script>
