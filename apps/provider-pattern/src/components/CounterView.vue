<template>
  <div>Count: {{ state.count }}</div>
</template>

<script lang="ts">
import { defineComponent, inject, onUpdated } from 'vue';
import { counterKey, CounterStore } from '../composables/use-counter';

export default defineComponent({
  name: 'CounterView',
  setup() {
    const { state } = inject<CounterStore>(counterKey);

    onUpdated(() => {
      console.log('render: CounterViewComponent');
    });

    return {
      state,
    };
  },
});
</script>
