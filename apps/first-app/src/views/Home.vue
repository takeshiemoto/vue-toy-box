<template>
  <h2>{{ firstName }} {{ lastName }}</h2>
</template>

<script>
import { defineComponent, ref, reactive, toRefs, onMounted } from 'vue';

export default defineComponent({
  name: 'Home',
  setup() {
    // プリミティブな値はref
    const message = ref('Hello world');
    const isActive = ref(true);

    // オブジェクトはreactive
    const state = reactive({
      firstName: 'John',
      lastName: 'Anderson',
    });

    // onMountのHook
    const sayHello = () => {
      console.log('Hello!!');
    };

    onMounted(sayHello);

    return toRefs(state); // これでstate.firstNameとせずに済むよ
  },
});
</script>
