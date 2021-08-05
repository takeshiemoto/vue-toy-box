<template>
  <button @click="decrement">Decrement</button>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import { counterKey, CounterStore } from '../composables/use-counter';

export default defineComponent({
  name: 'DecrementButton',
  setup() {
    const { decrement } = inject<CounterStore>(counterKey);

    return {
      decrement,
    };
  },
});
</script>
