<template>
  <button
    class="backspace button -filled"
    :disabled="!active"
    @click="handleBackspaceClick">X</button>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { eventBus } from '@/main';

@Component
export default class Backspace extends Vue {
  @Prop({ required: true, type: Boolean })
  active: boolean = false;

  handleBackspaceClick(): void {
    eventBus.$emit('letter-deleted');
  }
}
</script>
