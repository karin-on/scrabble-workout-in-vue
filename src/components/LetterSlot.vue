<template>
  <li :class="{ '-empty': !slotContent }" class="letter-slots__slot">{{ slotContent }}</li>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { LetterObject } from '@/models';

@Component
export default class LetterSlot extends Vue {
  @Prop({ required: true, type: Number })
  index!: number;

  @Prop({ required: true, type: Array })
  currentAnswer!: (LetterObject | any)[];

  get slotContent(): string {
    const { currentAnswer } = this;
    return currentAnswer[this.index] ? currentAnswer[this.index].value.toUpperCase() : '';
  }
}
</script>
