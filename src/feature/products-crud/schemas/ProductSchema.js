import * as Yup from 'yup';


const ProductSchema = Yup.object({
  name: Yup.string()
          .min(4,`The field Name is too short`).
          required(`The field Name can't be blank`),
  price: Yup.number().
          min(1,`The field Price needs to be postive`).
          required(`The field Name can't be blank`),
  category: Yup.string()
})

export default ProductSchema;
