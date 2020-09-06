<template>
  <header class="header">
    <h1 class="header__title">
      <router-link
        :to="{ name: 'home' }"
        class="link"
      >
        Scrabble Workout
      </router-link>
    </h1>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {}
</script>
