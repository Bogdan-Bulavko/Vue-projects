import axios from 'axios'

const getProduct = async (id) => {
  const { data } = await axios.get(`https://34643c0fb49ad60b.mokky.dev/items/${id}`)
  return data
}

export default getProduct
