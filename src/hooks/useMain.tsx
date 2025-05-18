import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadData, updatePageScroll } from '../redux/slice';
import data from '../data/data.json';
import { useScrollTrigger } from '@mui/material';
import { selectMainItems } from './selector';

export default function useMain() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData(data));
  }, []);

  const isLoaded = useSelector(selectMainItems);

  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });

  useEffect(() => {
    dispatch(updatePageScroll(trigger));
  }, [trigger]);

  return {
    isLoaded,
  };
}
