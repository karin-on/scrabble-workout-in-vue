<template>
  <div class="submit">
    <button
      class="submit__submit-button button -small -filled"
      @click="handleSubmitClick">Zatwierdź</button>
    <button
      class="submit__cancel-button button -small -outlined"
      @click="handleCancelClick">Anuluj</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Submit extends Vue {
  handleSubmitClick(): void {
    this.$emit('submit');
  }

  handleCancelClick(): void {
    this.$emit('cancel');
  }
}
</script>
