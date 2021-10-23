import axios from "axios";

const url = "http://localhost:3001";

export const getNewsLetter = async () => {
  const response = await axios.get(`${url}/newsletter`);
  return response.data;
};

export const getNewsLetterByID = async (id) => {
  const response = await axios.get(`${url}/newsletter/${id}`);
  return response.data[0];
};

export const postSubcribeToNewsletter = async (feedback) => {
  const response = axios.post(`${url}/create`, feedback);
  return response.data;
};

// Get Journal By ID
export const getJournalByID = async (id) => {
  const response = await axios.get(`${url}/library/${id}`);
  return response.data[0];
};

export const getLibrary = async () => {
  const response = await axios.get(`${url}/library`);
  return response.data;
};

export const getLibraryByValues = async (values) => {
  const response = await axios.post(`${url}/librarySearch/values`, { values });
  return response.data;
};

export const getLibraryByTitle = async (title) => {
  const response = await axios.get(`${url}/librarySearch/title/${title}`);
  return response.data;
};

export const getLibraryByYear = async (year) => {
  const response = await axios.get(`${url}/librarySearch/year/${year}`);
  return response.data;
};

export const getFilterYear = async () => {
  const response = await axios.get(`${url}/librarySearchYear/createdAt`);
  return response.data;
};

// ------------- Sample Delay in Database ------------- //
function timeout(delay) {
  return new Promise((res) => setTimeout(res, delay));
}
