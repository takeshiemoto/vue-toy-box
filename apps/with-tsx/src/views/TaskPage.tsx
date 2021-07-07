import { defineComponent } from 'vue';

import { TaskContainer } from '../containers/TaskContainer';

export const TaskPage = defineComponent({
  name: 'Tasks',
  setup() {
    return () => <TaskContainer />;
  },
});
