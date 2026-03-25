import { useProduct } from "./context/ProductContext"


export default function App() {
  const {products, isLoading} = useProduct();
  return (

    <div>
      <h1 className="text-6xl font-bold text-center p-8 bg-white">This a Simple Store</h1>
        <div>
          <input className="p-2 m-2 bg-slate-500 rounded text text-white" />
          <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-200 active:scale-95">Search</button>
          <div className="p-5">
            <label className="font-bold">Filter by Category: </label>
            <select name="" className="bg-slate-300">
              <option value="">All</option>
            </select>
          </div>
        </div>
      
      {/* <button onClick={()=>{setcount(count+1)}}>{count}</button> */}
      <div>
        <ul className="grid grid-cols-5 gap-4 bg-gray-100 border border-gray-200">
          {products.map((item) => (
            <li key={item.id} className="bg-slate-100 p-4 border">
              <div className="aspect-square mb-3">
                <img
                  src={item.images.length==1?item.images:item.images[1]}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-sm text-gray-700 line-clamp-2 min-h-[2.5rem]">
                  {item.title}
                </h3>
                <p className="text-base font-bold text-black">
                  {item.price}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
