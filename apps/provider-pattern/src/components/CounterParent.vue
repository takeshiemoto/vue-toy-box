<template>
  <div>
    <CounterView />
  </div>
</template>

<script lang="ts">
import { defineComponent, onUpdated, onMounted } from 'vue';
import CounterView from './CounterView.vue';

export default defineComponent({
  name: 'CounterParent',
  components: { CounterView },
  setup() {
    onMounted(() => {
      console.log('onMount');
    });

    onUpdated(() => {
      console.log('onUupdated');
    });

    return {};
  },
});
</script>
