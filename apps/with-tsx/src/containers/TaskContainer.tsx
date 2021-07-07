import { defineComponent, ref } from 'vue';

import { TaskList } from '../components/TaskList';
import { TaskListItem } from '../components/TaskListItem';
import { Task } from '../types/Task';

export const TaskContainer = defineComponent({
  name: 'TaskContainer',
  setup() {
    const tasks = ref<Task[]>([
      { id: '1', title: '経費精算', completed: false },
      { id: '2', title: '会議参加', completed: false },
      { id: '3', title: '勤怠連絡', completed: false },
    ]);

    const deleteTask = (id: Task['id']) => {
      if (window.confirm('削除しますか？')) {
        tasks.value = tasks.value.filter((t) => t.id !== id);
      }
    };

    const completeTask = (id: Task['id']) => {
      tasks.value = tasks.value.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      );
    };

    return () => (
      <>
        <h2>Tasks</h2>
        <TaskList>
          {tasks.value.map((t) => (
            <TaskListItem
              key={t.id}
              task={t}
              onCompleteClick={completeTask}
              onDeleteClick={deleteTask}
            />
          ))}
        </TaskList>
      </>
    );
  },
});
