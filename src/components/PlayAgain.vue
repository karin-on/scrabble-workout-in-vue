<template>
  <section class="play-again">
    <router-link
      :to="{ name: 'game' }"
      class="button -filled"
    >
      Zagraj ponownie
    </router-link>
  </section>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class PlayAgain extends Vue {}
</script>
