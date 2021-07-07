<template>
  <h2>Counter App</h2>
  <button @click="increment">Increment</button>
  <button @click="decrement">Decrement</button>
  <p>Count: {{ count }}</p>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Counter',
  setup() {
    const count = ref(0);

    const increment = () => {
      count.value++;
    };

    const decrement = () => {
      count.value--;
    };

    return {
      count,
      increment,
      decrement,
    };
  },
});
</script>
