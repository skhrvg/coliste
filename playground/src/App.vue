<script setup lang="ts">
import { CountButton, type CountButtonProps } from 'yourlib'
import { ref } from 'vue'

const count = ref(0)

const buttonProps: CountButtonProps = {
  prefix: 'You pressed button ',
  suffix: ' times',
}
</script>

<template>
  <main>
    <h1>yourlib playground</h1>
    <p>play with your components in this package</p>
    <div class="container">
      <CountButton v-model="count" />
      <CountButton v-model="count" prefix="Pressed: " />
      <CountButton v-model="count" suffix=" clicks" />
      <CountButton v-model="count" v-bind="buttonProps" />
    </div>
  </main>
</template>

<style scoped>

</style>
