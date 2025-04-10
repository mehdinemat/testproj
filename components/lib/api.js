import axios from "axios";


export const baseUrl = 'http://api.d.aiengines.ir/';

export const fetcher = async (url) => {
  try {
    const response = await axios.get(baseUrl + url);
    return response.data;
  } catch (err) {
    const error = new Error('An error occurred while fetching the data.');
    // Ensure error handling accounts for possibility of err.response being undefined
    error.info = err.response ? await err.response.data : 'No response received';
    error.status = err.response ? err.response.status : 'No response';
    throw error;
  }
};