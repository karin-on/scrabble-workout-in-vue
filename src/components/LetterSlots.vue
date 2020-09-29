<template>
  <ul class="letter-slots">
    <LetterSlot v-for="n in 7" :key="n" :index="n - 1" :currentAnswer="currentAnswer" />
  </ul>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { LetterObject } from '@/models';
import LetterSlot from './LetterSlot.vue';

@Component({
  components: {
    LetterSlot,
  },
})
export default class LetterSlots extends Vue {
  @Prop({ required: true, type: Array })
  currentAnswer!: LetterObject[];
}
</script>
