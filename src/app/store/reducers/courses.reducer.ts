import { Actions, CourseActionTypes } from '../actions/courses.actions';
import { ICourse } from '../../modules/dashboard/interfaces/course.interface';

export const initialState = [];


export function courseReducer(state: ICourse[] = initialState, action: Actions) {
  switch (action.type) {
    case CourseActionTypes.GET_COURSE: {
      return state.find(course => course.id.toString() === action.payload.toString());
    }
    case CourseActionTypes.CREATE_COURSE: {
      return [...state, action.payload];
    }
    case CourseActionTypes.REMOVE_COURSE: {
      return state.filter(course => course.id.toString() !== action.payload.toString());
    }
    case CourseActionTypes.GET_INITIAL_COURSES: {
      return [...action.payload]; // state is ICourse, payload is ICourse[]
    }
    case CourseActionTypes.GET_COURSES: {
      return state;
    }
    default: {
      return state;
    }
  }
}
