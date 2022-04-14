import {
  TEST_FAIL,
  TEST_REQUEST,
  TEST_SUCCESS,
} from "../Constants/testConstants";

// all test
export const testReducers = (state = { loading: true, tests: [] }, action) => {
  switch (action.type) {
    case TEST_REQUEST:
      return { loading: true };

    case TEST_SUCCESS:
      return { loading: false, success: true, tests: action.payload };

    case TEST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
