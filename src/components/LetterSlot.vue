<template>
  <li class="letter-slots__slot">{{ letter.value.toUpperCase() }}</li>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { LetterObject } from '@/models';

@Component
export default class LetterSlot extends Vue {
  @Prop({ required: false, type: Object })
  letter!: LetterObject;
}
</script>
