import axios from 'axios';

axios.defaults.withCredentials = false;

axios.defaults.baseURL = 'http://localhost:5000';

export const getAccounts = async () => {
  try {
    const response = await axios.get(`/api/accounts`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAccountById = async (accountNumber: string) => {
  try {
    const response = await axios.get(`/api/accounts/${accountNumber}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTransactionById = async (transactionId: string) => {
  try {
    const response = await axios.get(`/api/transactions/${transactionId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
