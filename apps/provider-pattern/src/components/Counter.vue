<template>
  <div>
    <CounterParent />
    <IncrementButton />
    <DecrementButton />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue';
import IncrementButton from './IncrementButton.vue';

import { counterKey, useCounter } from '../composables/use-counter';
import DecrementButton from './decrementButton.vue';
import CounterParent from './CounterParent.vue';

export default defineComponent({
  name: 'Counter',
  components: { CounterParent, DecrementButton, IncrementButton },
  setup() {
    provide(counterKey, useCounter());
    return {};
  },
});
</script>

<style scoped>
.wrapper {
  display: flex;
}
</style>
