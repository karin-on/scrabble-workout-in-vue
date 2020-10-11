<template>
  <div class="timer">{{ formattedTimeLeft }}</div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { formatDuration } from '@/helpers/format-duration';
import { GAME_DURATION, TIMER_INTERVAL } from '@/static/game';

@Component
export default class Timer extends Vue {
  // NOTE: null because then it's reactive. With undefined - it's not.
  start: number | null = null;

  timeLeft: number = GAME_DURATION;

  interval: number | null = null;

  created(): void {
    this.startTimer();
  }

  beforeDestroy(): void {
    this.stopTimer();
  }

  get formattedTimeLeft(): string | undefined {
    return formatDuration(this.timeLeft);
  }

  getCurrentTimeLeft(): number {
    return GAME_DURATION - (Date.now() - this.start!);
  }

  updateTimeLeft(): void {
    this.timeLeft = this.getCurrentTimeLeft();
  }

  startTimer(): void {
    this.start = Date.now();
    this.$nextTick(() => {
      this.updateTimeLeft();
      this.interval = setInterval(this.updateTimer, TIMER_INTERVAL);
    });
  }

  updateTimer(): void {
    this.updateTimeLeft();

    this.$nextTick((): void => {
      if (this.timeLeft <= 0) {
        this.stopTimer();
        this.timeOver();
      }
    });
  }

  stopTimer(): void {
    clearInterval(this.interval!);
  }

  timeOver(): void {
    this.$emit('time-over');
  }
}
</script>
