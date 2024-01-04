import { AxiosResponse } from 'axios';
import axiosInstance from '../../base.api';
import { StandardRequest } from './requests/standard.request';
import { StandarResponse } from './responses/standard.response';

const standardApi = async (requestBody: StandardRequest) => {
  return axiosInstance
    .post('/standards', requestBody)
    .then((response: AxiosResponse<StandarResponse>) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export { standardApi };
