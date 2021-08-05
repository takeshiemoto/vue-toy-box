<template>
  <button @click="decrement">Decrement</button>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import { CounterStore } from '../composables/use-counter';

export default defineComponent({
  name: 'DecrementButton',
  setup() {
    const { decrement } = inject<CounterStore>('counter');

    return {
      decrement,
    };
  },
});
</script>
