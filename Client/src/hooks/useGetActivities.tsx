import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { _fetchActivities, _saveFetchActivitesError } from '../actions/activityActions';
import { Activity } from '../reducers/activitiesReducer';
import { RootState } from '../store';

export const useGetActivities = (): [Activity[], boolean, string | null] => {
  const [getActivitiesIsLoading, setGetActivitiesIsLoading] = useState(false);
  const { filteredList, error } = useSelector((state: RootState) => state.activities);
  const dispatch = useDispatch();
  

  useEffect(() => {
    const get = async () => {
      setGetActivitiesIsLoading(true);
      const apiUrl = 'http://localhost:1337/activities';
  
      try {
        const response = await fetch(apiUrl);
  
        if(!response.ok) {
          throw new Error('There is an error');
        }
        const data = await response.json();
        dispatch(_fetchActivities(data));
      } catch(error) {
        const errorMessage = error ? error : `There is an error`;
        dispatch(_saveFetchActivitesError(errorMessage));
      } finally {
        setGetActivitiesIsLoading(false);
      }
    };
    get();
  }, [dispatch]);

  return [filteredList, getActivitiesIsLoading, error];
}