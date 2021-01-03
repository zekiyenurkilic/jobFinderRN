import {GET_ALL_DATAS, SET_JOB_LIKE, GET_JOB_DETAIL} from '../action/types';

const initialState = {
  jobs: [],
  jobDetail: null,
};

export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case GET_ALL_DATAS:
      return {
        ...state,
        jobs: payload,
      };
    case SET_JOB_LIKE:
      return {
        ...state,
        jobs: state.jobs.map((job) =>
          job.id === payload ? {...job, like: !job.like} : job,
        ),
      };
    case GET_JOB_DETAIL:
      return {
        ...state,
        jobDetail: payload,
      };
    default:
      return state;
  }
}
