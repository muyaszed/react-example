import { Activity, FilterKey } from "../reducers/activitiesReducer";
import {
  TOGGLE_ACTIVITY_OPEN,
  FETCH_ACTIVITIES,
  SAVE_FETCH_ACTIVITIES_ERROR,
  FILTER_ACTIVITIES,
} from "./types/activityTypes";

// Write your action creators in this file

export const _toggleActivityOpen = (activityId: number) => ({
  type: TOGGLE_ACTIVITY_OPEN,
  activityId,
});

export const _fetchActivities = (activities: Activity[]) => ({
  type: FETCH_ACTIVITIES,
  activities,
});

export const _saveFetchActivitesError = (error: string) => ({
  type: SAVE_FETCH_ACTIVITIES_ERROR,
  error,
});

export const _filterActivities = (filterKey: FilterKey) => ({
  type: FILTER_ACTIVITIES,
  filterKey,
});
