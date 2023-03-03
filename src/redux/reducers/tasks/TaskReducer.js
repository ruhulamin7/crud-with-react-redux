import * as Types from '../../types/Types';

const initialState = {
  tasks: [],
  taskForm: {
    _id: null,
    Title: '',
    Priority: '',
  },
};

function TaskReducer(state = initialState, action) {
  switch (action.type) {
    case Types.GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };

    case Types.ADD_TASK:
      return {
        ...state,
        taskForm: {
          Title: '',
          Priority: '',
        },
      };

    case Types.GET_TASK_DETAIL:
      return {
        ...state,
        taskForm: action.payload,
      };

    case Types.CHANGE_TASK_INPUT:
      const taskForm = { ...state.taskForm };
      taskForm[action.payload.name] = action.payload.value;
      return {
        ...state,
        taskForm,
      };

    default:
      break;
  }
  return state;
}

export default TaskReducer;
