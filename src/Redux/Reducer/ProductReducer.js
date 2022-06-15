import { fakeData } from "../../FakeData/FakeData";

const  initState = {
     products: fakeData,
      product:{}
}



const ProductReducer = (state= initState, action ) => {
    switch (action.type) {
        case 'PRODUCT':
              return {...state, product:state.products.find(product=> product.id === parseInt(action.id))}  
    
        default:
            return state;
    }
} 

export default ProductReducer;