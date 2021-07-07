import { defineComponent, SetupContext } from 'vue';

export const TaskList = defineComponent({
  name: 'TaskList',
  setup(_, ctx: SetupContext) {
    return () => <ul>{ctx.slots?.default()}</ul>;
  },
});
