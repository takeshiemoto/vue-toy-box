import { reactive } from 'vue';

export type CounterType = { count: number };

export const useCounter = () => {
  const initialState = { count: 0 };
  const state = reactive<CounterType>(initialState);

  const increment = () => {
    state.count++;
  };

  const decrement = () => {
    state.count--;
  };

  return {
    state,
    increment,
    decrement,
  };
};

export type CounterStore = ReturnType<typeof useCounter>;
