<template>
  <h2>VModel</h2>
  <input type="text" v-model="firstName" />
  <input type="text" v-model="lastName" />
  <p>{{ fullName }}</p>
</template>

<script>
import { defineComponent, reactive, toRefs, computed } from 'vue';

export default defineComponent({
  name: 'VModel',
  setup() {
    const state = reactive({
      firstName: 'Eric',
      lastName: 'clapton',
    });

    const fullName = computed(() => `${state.firstName} ${state.lastName}`);

    return {
      ...toRefs(state),
      fullName,
    };
  },
});
</script>
