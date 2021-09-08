import axios, {AxiosError, AxiosResponse} from 'axios';
import {Alert} from 'react-native';

const instance = axios.create({
  baseURL: 'http://45.76.149.250:8081/',
  timeout: 1000,
});

type ApiParamsType = {
  type: 'POST' | 'GET' | 'PUT';
  url: string;
  payload?: object;
  alertWhenFailed?: boolean;
};
type ApiReturnType = {
  success: boolean;
  errorMessage?: string;
  data?: AxiosResponse;
};

export const api = async ({
  type,
  url,
  payload,
  alertWhenFailed = true,
}: ApiParamsType): Promise<ApiReturnType> => {
  try {
    let data = null;
    if (type == 'POST') {
      const {data: resp}: AxiosResponse = await instance.post(url, payload);
      data = resp;
    }

    return {success: true, data};
  } catch (error: unknown | AxiosError) {
    if (axios.isAxiosError(error)) {
      handleAxiosError(error);

      if (alertWhenFailed) {
        Alert.alert('Oops!', error.response?.data?.message, [{text: 'Okay'}]);
      }
      return {success: false, errorMessage: error.response?.data?.message};
    } else {
      console.log({unexpectedError: error});
      return {success: false, errorMessage: ''};
    }
  }
};

const handleAxiosError = (error: AxiosError) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log('Response Error: ');
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log('Request Error: ');
    console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error: ');
    console.log(error.message);
  }
  console.log('Error Config: ');
  console.log(error.config);
};
