import { AnyAction } from 'redux';
import {
  TOGGLE_ACTIVITY_OPEN,
  FETCH_ACTIVITIES,
  SAVE_FETCH_ACTIVITIES_ERROR,
  FILTER_ACTIVITIES,
} from "../actions/types/activityTypes";

export type FilterKey = 'close' | 'open' | 'showAll'; 

export interface Activity {
  id: number;
  name: string;
  description: string;
  isOpen: boolean;
  type: string;
  image: string;
}

export interface ActivityState {
  list: Activity[];
  filteredList: Activity[];
  filterKey: FilterKey;
  error: string | null;
}

const initialActivityState: ActivityState = {
  list: [],
  filteredList: [],
  filterKey: 'showAll',
  error: null,
};

const toggleActivity = (state: ActivityState, activityId: number): ActivityState => {
  const newList = state.list.map(item => item.id === activityId ?
    {
      ...item,
      isOpen: !item.isOpen,
    } : item);

  return filterActivities({
    ...state,
    list: newList,
  }, state.filterKey);

};

const filterActivities = (state: ActivityState, filterKey: FilterKey): ActivityState => {
  switch (filterKey) {
    case 'close':
      return {
        ...state,
        filteredList: state.list.filter(item => item.isOpen === false),
        filterKey,
      };    
    case 'open':
      return {
        ...state,
        filteredList: state.list.filter(item => item.isOpen),
        filterKey,
      };    
    default:
      return {
        ...state,
        filteredList: state.list,
        filterKey,
      };
  }
}

export const activities = (state = initialActivityState, action: AnyAction): ActivityState => {
  switch (action.type) {
    case TOGGLE_ACTIVITY_OPEN:
      return toggleActivity(state, action.activityId);
    case FETCH_ACTIVITIES:
      return {
        ...state,
        list: action.activities,
        filteredList: action.activities,
      };
    case SAVE_FETCH_ACTIVITIES_ERROR:
      return {
        ...state,
        error: action.error,
      }
    case FILTER_ACTIVITIES:
      return filterActivities(state, action.filterKey);
    default:
      return state;
  }
};
