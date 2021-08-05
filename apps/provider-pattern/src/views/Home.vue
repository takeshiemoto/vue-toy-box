<template>
  <div>
    <Counter />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Counter from '../components/Counter';

export default defineComponent({
  name: 'Home',
  components: { Counter },
});
</script>
