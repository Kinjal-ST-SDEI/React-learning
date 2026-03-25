import Header from "./components/Header"

export default function App() {
  // const [point, setPoint] = useState([]);
  const ab=()=>{
    alert("Fuyoooou!")
  }
  return (
    <>
    <Header></Header>
    <nav className="flex p-6 items-center justify-between bg-emerald-950">
      <h2>NoobToPro</h2>
      <div className="flex gap-4">
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Blog</h4>
        <h4>Contact us</h4>
      </div>
    </nav>
    <div className="w-full p-8 text-center ">
      <button className='font-bold rounded-4xl bg-amber-400 w-50 p-3 ' onClick={ab}>Yeppy</button>
    </div>
    </>
  )
}

