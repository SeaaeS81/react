
import axios from 'axios';

export const fetchData = (dataType) => async (dispatch) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/${dataType}`);
  dispatch({ type: `FETCH_${dataType.toUpperCase()}`, payload: response.data });
};

export const multiply = () => {
  return {
    type: 'MULTIPLY'
  };
};

export const divide = () => {
  return {
    type: 'DIVIDE'
  };
};