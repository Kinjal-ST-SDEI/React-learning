import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

export default function ProductContextProvider({children}){
      const [isLoading, setIsLoading] = useState(false);
      const [products, setProducts] = useState([]);
   
    useEffect(() => {
    async function fetchProd() {
      try {
        setIsLoading(true);
        const res = await axios.get("https://dummyjson.com/products")
        setProducts(res.data.products)
      } catch (error) {
        console.log(error)
      } finally { 
        setIsLoading(false);
      }
    }
    fetchProd();
  },[])
    return <ProductContext.Provider value={{isLoading, products}}>{children}</ProductContext.Provider>
}

export function useProduct(){
    const context = useContext(ProductContext)
    if(!context) throw new Error("Product contex should be used inside product provide")
    return context;
}

