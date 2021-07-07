<template>
  <h2>Change name App</h2>
  <p>{{ firstName }} {{ lastName }}</p>
  <button @click="changeName">Change Name</button>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  name: 'ChangeName',
  setup() {
    const state = reactive({
      firstName: 'Jeff',
      lastName: 'Beck',
    });

    const changeName = () => {
      state.firstName = 'Eric';
      state.lastName = 'Clapton';
    };

    return {
      ...toRefs(state),
      changeName,
    };
  },
});
</script>
