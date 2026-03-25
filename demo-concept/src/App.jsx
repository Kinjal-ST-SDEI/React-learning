import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import { useState } from "react"

export default function App() {
  // const [point, setPoint] = useState();
  const ab = () => (
    console.log(searchTerm)
  
  )
  const [searchTerm, setSearchTerm] = useState("")
  const pro = [
    { "name": "Aarav Mehta", "location": "Mumbai, MH", "phone": "+91-98765-43210", "profile_image": "https://i.pravatar.cc/150?u=aarav" },
    { "name": "Ishani Bose", "location": "Kolkata, WB", "phone": "+91-98300-12345", "profile_image": "https://i.pravatar.cc/150?u=ishani" },
    { "name": "Rohan Sharma", "location": "Delhi, DL", "phone": "+91-91234-56789", "profile_image": "https://i.pravatar.cc/150?u=rohan" },
    { "name": "Sanya Iyer", "location": "Chennai, TN", "phone": "+91-94440-11223", "profile_image": "https://i.pravatar.cc/150?u=sanya" },
    { "name": "Arjun Reddy", "location": "Hyderabad, TS", "phone": "+91-99887-76655", "profile_image": "https://i.pravatar.cc/150?u=arjun" },
    { "name": "Ananya Das", "location": "Guwahati, AS", "phone": "+91-97060-55443", "profile_image": "https://i.pravatar.cc/150?u=ananya" },
    { "name": "Kabir Singh", "location": "Amritsar, PB", "phone": "+91-98140-99887", "profile_image": "https://i.pravatar.cc/150?u=kabir" },
    { "name": "Meera Nair", "location": "Kochi, KL", "phone": "+91-94470-33221", "profile_image": "https://i.pravatar.cc/150?u=meera" },
    { "name": "Aditya Verma", "location": "Lucknow, UP", "phone": "+91-99350-44556", "profile_image": "https://i.pravatar.cc/150?u=aditya" },
    { "name": "Zara Khan", "location": "Srinagar, JK", "phone": "+91-99060-11223", "profile_image": "https://i.pravatar.cc/150?u=zara" },
    { "name": "Vikram Rathore", "location": "Jaipur, RJ", "phone": "+91-94140-77889", "profile_image": "https://i.pravatar.cc/150?u=vikram" },
    { "name": "Diya Mukherjee", "location": "Durgapur, WB", "phone": "+91-98321-55667", "profile_image": "https://i.pravatar.cc/150?u=diya" },
    { "name": "Rahul Deshmukh", "location": "Pune, MH", "phone": "+91-98230-11122", "profile_image": "https://i.pravatar.cc/150?u=rahul" },
    { "name": "Pooja Hegde", "location": "Bengaluru, KA", "phone": "+91-98450-44332", "profile_image": "https://i.pravatar.cc/150?u=pooja" },
    { "name": "Siddharth Malhotra", "location": "Chandigarh, CH", "phone": "+91-98150-66778", "profile_image": "https://i.pravatar.cc/150?u=sid" },
    { "name": "Tanya Batra", "location": "Indore, MP", "phone": "+91-98270-88990", "profile_image": "https://i.pravatar.cc/150?u=tanya" },
    { "name": "Karthik Raja", "location": "Madurai, TN", "phone": "+91-94430-12121", "profile_image": "https://i.pravatar.cc/150?u=karthik" },
    { "name": "Riya Sen", "location": "Agartala, TR", "phone": "+91-98620-33445", "profile_image": "https://i.pravatar.cc/150?u=riya" },
    { "name": "Amitabh Joshi", "location": "Dehradun, UK", "phone": "+91-94120-55667", "profile_image": "https://i.pravatar.cc/150?u=amitabh" },
    { "name": "Sneha Kulkarni", "location": "Nagpur, MH", "phone": "+91-98220-77889", "profile_image": "https://i.pravatar.cc/150?u=sneha" },
    { "name": "Varun Dhawan", "location": "Bhopal, MP", "phone": "+91-98260-99001", "profile_image": "https://i.pravatar.cc/150?u=varun" },
    { "name": "Kiara Advani", "location": "Shimla, HP", "phone": "+91-94180-22334", "profile_image": "https://i.pravatar.cc/150?u=kiara" },
    { "name": "Prateek Babbar", "location": "Patna, BR", "phone": "+91-99340-44556", "profile_image": "https://i.pravatar.cc/150?u=prateek" },
    { "name": "Alia Bhatt", "location": "Ahmedabad, GJ", "phone": "+91-98250-66778", "profile_image": "https://i.pravatar.cc/150?u=alia" },
    { "name": "Ranbir Kapoor", "location": "Ranchi, JH", "phone": "+91-94310-88990", "profile_image": "https://i.pravatar.cc/150?u=ranbir" },
    { "name": "Shraddha Kapoor", "location": "Panaji, GA", "phone": "+91-98221-11223", "profile_image": "https://i.pravatar.cc/150?u=shraddha" },
    { "name": "Ayushmann Khurrana", "location": "Raipur, CT", "phone": "+91-98261-33445", "profile_image": "https://i.pravatar.cc/150?u=ayush" },
    { "name": "Bhumi Pednekar", "location": "Bhubaneswar, OD", "phone": "+91-94370-55667", "profile_image": "https://i.pravatar.cc/150?u=bhumi" },
    { "name": "Vicky Kaushal", "location": "Jodhpur, RJ", "phone": "+91-94141-77889", "profile_image": "https://i.pravatar.cc/150?u=vicky" },
    { "name": "Taapsee Pannu", "location": "Ludhiana, PB", "phone": "+91-98141-99001", "profile_image": "https://i.pravatar.cc/150?u=taapsee" }
  ]
  return (
    <>
      <Header></Header>
      <Navbar />
      <div className="w-full p-8 text-center ">
        <form>
          <input type="text" value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value);console.log(searchTerm)}} placeholder="Search name" className="p-2 rounded-xl bg-emerald-900 mr-4.5" />
          <button className='font-bold rounded-4xl bg-amber-400 w-50 p-3 ' onClick={ab}>Yeppy</button>
        </form>
      </div>
      <div className="p-8 border border-white w-full bg-slate-900 items-center">
        {pro.map((item,key) => (
          <Card key={key} user={item.name} location={item.location} phone={item.phone} img={item.profile_image}/>

        ))}
      </div>
    </>
  )
}

