import {GET_ALL_DATAS, SET_JOB_LIKE, GET_JOB_DETAIL} from './types';
import store from '../store';

export const getAllDatas = () => async (dispatch) => {
  try {
    // const response = await axios.get(
    //   `${baseUrl}/memory?page=${page}&limit=${limit}`,
    // );
    const response = [
      {
        id: 1,
        image: 'https://egegen.com/blog/wp-content/uploads/2017/03/google.jpg',
        firmName: 'Google',
        positionName: 'Senior Developer',
        price: '$8k',
        country: 'Tokyo,Japan',
        like: false,
        time: 'Full Time',
      },
      {
        id: 2,
        image: 'https://egegen.com/blog/wp-content/uploads/2017/03/google.jpg',
        firmName: 'Google',
        positionName: 'Senior Developer',
        price: '$8k',
        country: 'Tokyo,Japan',
        like: false,
        time: 'Full Time',
      },
    ];
    await dispatch({
      type: GET_ALL_DATAS,
      payload: response,
    });
  } catch (error) {
    console.log('error get data');
  }
};

export const setJobLike = (id) => async (dispatch) => {
  try {
    await dispatch({
      type: SET_JOB_LIKE,
      payload: id,
    });
  } catch (error) {
    console.log('error set like');
  }
};

export const getJobDetail = (id, callDb) => async (dispatch) => {
  try {
    //Backend olmadığı için  find ile statedeki eleman bulunmuştur.
    let jobDetail = null;
    if (callDb) {
      let allData = store.getState().jobs.jobs;
      jobDetail = allData.find((data) => data.id === id);
    } else {
      jobDetail = {
        ...store.getState().jobs.jobDetail,
        like: !store.getState().jobs.jobDetail.like,
      };
    }
    await dispatch({
      type: GET_JOB_DETAIL,
      payload: jobDetail,
    });
  } catch (error) {
    console.log('error get job detail');
  }
};
