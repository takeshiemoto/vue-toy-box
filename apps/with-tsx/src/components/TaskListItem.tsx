import { defineComponent, PropType } from 'vue';

import { Task } from '../types/Task';

type Props = {
  task: Task;
  onCompleteClick: (id: string) => void;
  onDeleteClick: (id: string) => void;
};

export const TaskListItem = defineComponent({
  name: 'TaskListItem',
  props: {
    task: Object as PropType<Props['task']>,
    onCompleteClick: Function as PropType<Props['onCompleteClick']>,
    onDeleteClick: Function as PropType<Props['onDeleteClick']>,
  },
  setup(props: Props) {
    const handleCompleteClick = () => {
      props.onCompleteClick(props.task.id);
    };

    const handleDeleteClick = () => {
      props.onDeleteClick(props.task.id);
    };

    return () => (
      <li>
        <div>
          <p
            style={{
              textDecoration: props.task.completed ? 'line-through' : undefined,
            }}
          >
            {props.task.title}
          </p>
          <button onClick={handleCompleteClick}>Complete</button>
          <button onClick={handleDeleteClick}>Delete</button>
        </div>
      </li>
    );
  },
});
