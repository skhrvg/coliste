<script setup lang="ts">
import { CountButton } from 'yourlib'
import 'yourlib/style.css'
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <main>
    <h1>yourlib playground</h1>
    <p>play with your components in this package</p>
    <div class="container">
      <CountButton v-model:count="count" />
      <CountButton v-model:count="count" prefix="Pressed: " />
      <CountButton v-model:count="count" suffix=" clicks" />
      <CountButton v-model:count="count" prefix="You pressed button " suffix=" times" />
    </div>
  </main>
</template>

<style scoped>

</style>
