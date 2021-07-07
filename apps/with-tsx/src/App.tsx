import { defineComponent } from 'vue';

export const App = defineComponent({
  name: 'App',
  setup() {
    return () => <router-view />;
  },
});
