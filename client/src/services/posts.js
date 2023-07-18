import axios from 'axios'
const baseUrl = '/api/posts/'


export const getAllPosts = async (type) => {
  const res = await axios.get(baseUrl)
  const { data } = res
  return data
}

export const getAPost = async (id) => {
  const res = await axios.get(baseUrl + id);
  return res.data
}

export const createPost = async (post) => {
  const res = await axios.post(baseUrl, post)
  const { data } = res
  return data
}

export const editPost = async (id, data) => {
  const res = await axios.put(baseUrl + id + '/edit', data);
  return res.data
}

export const deletePost = async (id) => {
  const res = await axios.delete(baseUrl + id);
  return res.data
}
// url 중복 검사

export const urlDuplicate = async (data) => {
  try {
  const res = await axios.post(baseUrl + 'urlduplicate', { params: { data } });
  return res.data
} catch (error) {
  console.log(error)
  throw new Error('An error occurred while checking for URL duplicates.')
}
}

// Comment // Comment // Comment // Comment // Comment 
export const addComment = async (id, comment) => {
  const res = await axios.put(baseUrl + id + '/comments', comment)
  const { data } = res
  return data
}

export const deleteComment = async (id) => {
  const res = await axios.delete(baseUrl + id);
  return res.data
}

// Like // Like // Like // Like // Like 
export const toggleLike = async (id, userId, type) => {
  const res = await axios.put(baseUrl + id + '/likes', {userId, type})
  const { data } = res
  return data
}