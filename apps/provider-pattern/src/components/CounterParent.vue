<template>
  <div>
    {{ message }}
    <CounterView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CounterView from './CounterView.vue';

export default defineComponent({
  name: 'CounterParent',
  components: { CounterView },
  setup() {
    console.log('Render!');
    return {
      message: 'parent',
    };
  },
});
</script>
