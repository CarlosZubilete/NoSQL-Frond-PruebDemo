import axios from "axios"

const productService = {

  findAll: async () => {
    return axios.get('http://localhost:3000/products')
      .then((response)=>{
        return response.data;
      })
      .catch((error)=>{
          throw error
      })     
  },
  
  create: async (values) => {
    return axios.post('http://localhost:3000/products',JSON.stringify(values), {
      headers: {
          'Content-Type': 'application/json'
        }
        }) 
  },
 
  findById: async(id) => {
    return axios.get(`http://localhost:3000/products/${id}`)
    .then((response) =>{
      return response.data;
    })
    .catch(() => {

    })
  },
  
  editByID: async (id,values) => {
    return axios.patch(`http://localhost:3000/products/${id}`,JSON.stringify(values),{
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },
  
  deleteByID: async (id) => {
    return axios.delete(`http://localhost:3000/products/${id}`,{
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
};

export default productService