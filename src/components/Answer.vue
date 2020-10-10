<template>
  <section class="answer">
    <template v-if="answerWasSubmitted">
      <h2 class="answer__title">Twoje słowo:</h2>
      <div class="answer__word">{{ answer }}</div>
    </template>
    <template v-else>
      <h2 class="answer__title">Nie ułożyłaś(eś) słowa</h2>
    </template>
  </section>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Answer extends Vue {
  @Prop({ required: true, type: String })
  answer!: string;

  @Prop({ required: true, type: Boolean })
  answerWasSubmitted!: boolean;
}
</script>
