<script setup lang="ts">
export interface CountButtonProps {
  prefix?: string
  suffix?: string
}

const props = withDefaults(defineProps<CountButtonProps>(), {
  prefix: '',
  suffix: '',
})

const count = defineModel<number>({ required: true })
</script>

<template>
  <button @click="count++">
    {{ `${props.prefix}${count}${props.suffix}` }}
  </button>
</template>

<style scoped>
button {
  display: flex;
  place-items: center;
  place-content: center;
  padding: 0.8rem 1.6rem;
  border: 1px solid rgba(60, 60, 60, 0.12);
  border-radius: 8px;
  background: #ffffff;
  color: #2c3e50;
  cursor: pointer;
  line-height: 1.6;
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
  Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 15px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
button:hover {
  border-color: rgba(60, 60, 60, 0.29);
}
@media (prefers-color-scheme: dark) {
  button {
    background: #181818;
    border-color: rgba(84, 84, 84, 0.48);
    color: rgba(235, 235, 235, 0.64);
  }
  button:hover {
    border-color: rgba(84, 84, 84, 0.65);
  }
}
</style>
