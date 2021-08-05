<template>
  <button @click="increment">Increment</button>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import { counterKey, CounterStore } from '../composables/use-counter';

export default defineComponent({
  name: 'IncrementButton',
  setup() {
    const { increment } = inject<CounterStore>(counterKey);

    return {
      increment,
    };
  },
});
</script>
