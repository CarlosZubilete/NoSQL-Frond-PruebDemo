import axios from "axios"
import connection from '../../../config/connection.js'

const productService = {

  findAll: async () => {
    return axios.get(`${connection}/products`)
      .then((response)=>{
        return response.data;
      })
      .catch((error)=>{
          throw error
      })     
  },
  
  create: async (values) => {
    return axios.post(`${connection}/products`,JSON.stringify(values), {
      headers: {
          'Content-Type': 'application/json'
        }
        }) 
  },
 
  findById: async(id) => {
    return axios.get(`${connection}/products/${id}`)
    .then((response) =>{
      return response.data;
    })
    .catch(() => {

    })
  },
  
  editByID: async (id,values) => {
    return axios.patch(`${connection}/products/${id}`,JSON.stringify(values),{
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },
  
  deleteByID: async (id) => {
    return axios.delete(`${connection}/products/${id}`,{
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
};

export default productService