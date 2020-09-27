<template>
  <main class="view -home">
    <section class="hero">
      <h2 class="hero__title">Become a Scrabble Master!</h2>
    </section>
    <section class="start-game">
      <router-link
        :to="{ name: 'game' }"
        class="button -filled"
      >
        Play
      </router-link>
    </section>
  </main>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {}
</script>
