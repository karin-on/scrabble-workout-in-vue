<template>
  <section class="result-message">
    <h2 class="result-message__title">{{ resultMessage }}</h2>
  </section>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ResultMessage extends Vue {
  @Prop({ required: true, type: Boolean })
  answerIsCorrect!: boolean;

  get resultMessage(): string {
    return this.answerIsCorrect ? 'Gratulacje! Jest to poprawna odpowiedź!' : 'Nie udało się. Może następnym razem';
  }
}
</script>
