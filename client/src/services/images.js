import axios from 'axios';
const baseUrl = '/api/images/'

export const createImage = async (Image) => {
  const res = await axios.post(baseUrl + '/', Image)
  const { data } = res
  return data
}
export const getAImage = async (id) => {
  if (id === null || id === "null") {
    throw new Error("Invalid id parameter");
  }
  const res = await axios.get(baseUrl + 'single/' + id);
  const { data } = res;
  return data;
};

export const getImages = async (id) => {
  if (id === null || id === "null") {
    throw new Error("Invalid id parameter");
  }
  const res = await axios.get(baseUrl + 'multiple/' + id);
  const { data } = res;
  return data;
};

export const updateImage = async (id) => {
  const res = await axios.put(baseUrl + id);
  return res.data
}