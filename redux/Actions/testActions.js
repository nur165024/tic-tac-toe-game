import {
  TEST_FAIL,
  TEST_REQUEST,
  TEST_SUCCESS,
} from "../Constants/testConstants";

// all test
export const tests = () => async (dispatch) => {
  dispatch({
    type: TEST_REQUEST,
  });

  try {
    const data = { name: "test" };
    dispatch({
      type: TEST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TEST_FAIL,
      payload: error.response,
    });
  }
};
