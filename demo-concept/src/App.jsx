import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import { useContext, useState } from "react"
import {FirstContext} from "./context/UserContext"


export default function App() {
  
  const UserContext=useContext(FirstContext);
  const data=UserContext.data;
  const [searchTerm, setSearchTerm] = useState("")
  function handleSubmit(e){
    e.preventDefault();
    const sanitizedSearchTem = searchTerm.toLocaleLowerCase().trim();
    const filterResult = data.filter(el=> el.name.toLocaleLowerCase().trim().includes(sanitizedSearchTem));
    setData(filterResult)
   }
  
  return (
    <>
      <Header></Header>
      <Navbar />
      <div className="w-full p-8 text-center ">
        <form onSubmit={handleSubmit}>
          <input type="text" value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value);console.log(searchTerm)}} placeholder="Search name" className="p-2 rounded-xl bg-emerald-900 mr-4.5" />
          <button type="submit" className='font-bold rounded-4xl bg-amber-400 w-50 p-3 '>Yeppy</button>
        </form>
      </div>
      <div className="p-8 border border-white w-full bg-slate-900 items-center">
        {data.map((item,key) => (
          <Card key={key} user={item.firstName +" "+item.lastName} location={item.address.city} phone={item.phone} img={item.image}/>

        ))}
      </div>
    </>
  )
}

