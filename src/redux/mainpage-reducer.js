import giphyAPI from "../api/api";

const SET_GIF = "SET_GIF";
const SET_SEARCH_GIF = "SET_SEARCH_GIF";
const ON_PRELOADER = "ON_PRELOADER";
const DELETE_CURRENT_GIF = "DELETE_CURRENT_GIF";
const UPDATE_TOTAL_COUNT = "UPDATE_TOTAL_COUNT";
const UPDATE_DETAILS = "UPDATE_DETAILS";

const initialState = {
  data: [],
  dataSearch: [],
  preload: false,
  totalCount: 4,
  isActive: true,
  showDetails: {
    display: "none",
    data: [],
    location: null,
  },
};

const mainPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GIF: {
      return { ...state, data: action.data };
    }

    case SET_SEARCH_GIF: {
      return {
        ...state,
        dataSearch: action.data,
        isActive: false,
      };
    }

    case ON_PRELOADER: {
      return { ...state, preload: action.isTrue };
    }

    case DELETE_CURRENT_GIF: {
      return {
        ...state,
        dataSearch: state.dataSearch.filter((el) => el.id !== action.id),
      };
    }

    case UPDATE_TOTAL_COUNT: {
      return { ...state, totalCount: state.totalCount + 4 };
    }

    case UPDATE_DETAILS: {
      return { ...state, showDetails: action.details };
    }

    default:
      return state;
  }
};

export const setGivAC = (data) => ({ type: SET_GIF, data });
export const setSearchGivAC = (data) => ({ type: SET_SEARCH_GIF, data });
export const preloaderAc = (isTrue) => ({ type: ON_PRELOADER, isTrue });
export const deleteCurrentGifAc = (id) => ({ type: DELETE_CURRENT_GIF, id });
export const setTotalCountAc = (value) => ({ type: UPDATE_TOTAL_COUNT, value });
export const setShowDetailsAc = (details) => ({
  type: UPDATE_DETAILS,
  details,
});

export const setGif = (endPoint, value) => async (dispatch) => {
  dispatch(preloaderAc(true));
  const data = await giphyAPI.getGiphyData(endPoint, value);
  dispatch(setGivAC(data.data));
  dispatch(preloaderAc(false));
};

export const setSearchGif = (text) => async (dispatch) => {
  dispatch(preloaderAc(true));
  const data = await giphyAPI.getSearchGiphyData(text);
  dispatch(preloaderAc(false));
  dispatch(setSearchGivAC(data.data));
};

export const setCategoriesSearchGif = (text) => async (dispatch) => {
  dispatch(preloaderAc(true));
  const data = await giphyAPI.getCategoriesSearchGif(text);
  dispatch(setGivAC(data.data));
  dispatch(preloaderAc(false));
};

export const setUpdateTotalCount = () => (dispatch) => {
  dispatch(setTotalCountAc());
};

export const updateDetails = (details) => (dispatch) => {
  dispatch(setShowDetailsAc(details));
};

export default mainPageReducer;
