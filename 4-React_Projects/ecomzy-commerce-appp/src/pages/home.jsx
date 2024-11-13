import { useEffect, useState } from 'react'
import Product from '../Components/Product'
import Spinner from '../Components/Spinner'

const Home = () => {
    const api_url = "https://fakestoreapi.com/products"
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    // Console.log(products)
    async function fetchProductData() {
       
        try {
            const response = await fetch(api_url)
            const data = await response.json()
            setProducts(data)
            console.log(data)
        }
        catch (error) {
            console.log(error)
            setProducts([])
            setLoading(true)

        }
        finally {
            // setLoading(true)
        }

    }
    useEffect(() => {
        fetchProductData()
    }, [])
    return (
        
        <div>
            <div className="flex justify-center items-center">
                <h1 className="text-3xl font-bold underline">Products</h1>
                <input type="file" />
            </div>
        {
          loading ? <Spinner />  :
          products.length > 0 ? 
          (<div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
            {
              products.map( (product) => (
              <Product key = {product.id} product={product}/>
            ) )
            }
          </div>) :
          <div className="flex justify-center items-center">
            <p>No Data Found</p>
          </div> 
        }
      </div>
    )
}

export default Home