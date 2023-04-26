<template>
  <div>
    <input v-model="time_input" type="number">
    <span class="time-remaining">
      {{ time_remaining_text }}
    </span>
    <button @click="startTimer">Start</button>
    <button :disabled="!timer_running" @click="stopTimer">Stop</button>
    <button :disabled="!timer_running" @click="resetTimer">Reset</button>
  </div>
</template>

<script>
export default {
  name: "LoopTimer",
  data() {
    return {
      timer_running: false,
      time_input: 0,
      start_time: 0,
      time_remaining_text: '',
      seconds_remaining: null
    }
  },
  methods: {
    startTimer() {
      console.log('start timer')
      this.timer_running = true
      this.start_time = new Date().getTime()
      this.time_remaining_text = this.formatTime();

      let timer = setInterval(() => {
        if (this.timer_running) {
          this.time_remaining_text = this.formatTime()
          if (this.seconds_remaining <= 0) {
            this.timer_running = false
            clearInterval(timer)
          }
        }
      }, 50)
    },
    stopTimer() {
      console.log('stop timer')
      this.timer_running = false
    },
    resetTimer() {
console.log('reset timer')
      this.start_time = new Date().getTime()
    },
    formatTime() {
      console.log('format time')
      let seconds_remaining = (this.start_time + this.time_input * 1000 - new Date().getTime()) / 1000
      seconds_remaining = Math.round(seconds_remaining)
      this.seconds_remaining = seconds_remaining


      return new Date(seconds_remaining * 1000).toISOString().slice(11, 19);
    }
  }

}
</script>

<style scoped>

</style>