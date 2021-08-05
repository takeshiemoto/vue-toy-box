<template>
  <div>Count: {{ state.count }}</div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import { CounterStore } from '../composables/use-counter';

export default defineComponent({
  name: 'CounterView',
  setup() {
    const { state } = inject<CounterStore>('counter');
    return {
      state,
    };
  },
});
</script>
