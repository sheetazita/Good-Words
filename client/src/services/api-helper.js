import axios from 'axios';

// const baseUrl = 'https://goodbiblewords.herokuapp.com/'
const baseUrl = 'http://localhost:3000'

const api = axios.create({
  baseURL: baseUrl
})

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData)
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users/', { user: registerData })
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify');
    return resp.data
  }
  return false
}

// export const readAllTopics = async () => {
//   const resp = await api.get('/topics')
//   const topics = resp.data
//   // console.log(topics)
//   return topics
// }

export const readRandomVerse = async () => {
  const resp = await api.get('/verses/random')
  const verse = resp.data
  return verse
}

export const readAllGifts = async (topic_id) => {
  const resp = await api.get(`/topics/${topic_id}/gifts`)
  const gifts = resp.data
  return gifts
}

// export const readGift = async (gift_id) => {
//   const resp = await api.get(`/topics/topicId/gifts/${gift_id}`)
//   return resp.data
// }

export const createGift = async (data, topic_id) => {
  const resp = await api.post(`topics/${topic_id}/gifts`, { gift: data })
  return resp.data.gift
}

export const updateGift = async (topicId,id, data) => {
  const resp = await api.put(`topics/${topicId}/gifts/${id}`,  data )
  return resp.data
}

export const destroyGift = async (topic_id, gift_id) => {
  const resp = await api.delete(`topics/${topic_id}/gifts/${gift_id}`)
  return resp.data
}