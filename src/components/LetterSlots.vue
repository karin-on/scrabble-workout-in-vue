<template>
  <ul class="letter-slots">
    <LetterSlot v-for="n in 7" :key="n" :letter="`${n}`" />
  </ul>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import LetterSlot from './LetterSlot.vue';

@Component({
  components: {
    LetterSlot,
  },
})
export default class LetterSlots extends Vue {}
</script>
