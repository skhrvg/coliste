<script setup lang="ts">
import { ref, watch } from 'vue'

export interface Props {
  count: number
  prefix?: string
  suffix?: string
}
const props = withDefaults(defineProps<Props>(), {
  prefix: '',
  suffix: '',
})
const emit = defineEmits(['update:count'])

const countRef = ref(props.count)

watch(countRef, value => emit('update:count', value))
watch(props, ({ count }) => countRef.value = count, { deep: true })
</script>

<template>
  <button @click="countRef++">
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
