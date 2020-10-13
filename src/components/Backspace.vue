<template>
  <button class="backspace" :disabled="!active" @click="handleBackspaceClick">
    <i class="fas fa-backspace fa-2x"></i>
  </button>
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
