<template>
  <li class="letter-slots__slot">{{ letter }}</li>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

const LetterSlotProps = Vue.extend({
  props: {
    letter: String,
  },
});

@Component
export default class LetterSlot extends LetterSlotProps {}
</script>
