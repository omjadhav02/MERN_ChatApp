import { IoSearchSharp} from "react-icons/io5";
import useConversations from "../../zustand/useConversations";
import useGetConversation from "../../hooks/useGetConversation";
import toast from "react-hot-toast";
import { useState } from "react";
const SearchInput = () => {

  const [search, setSearch] = useState("")
  const {setSelectedConversation} = useConversations()
  const {conversations} = useGetConversation();

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!search) return ;
    if(search.length < 3){
      return toast.error("Search term must be at least 3 characters long!")
    }
  
  const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()))
  if(conversation){
    setSelectedConversation(conversation)
    setSearch("")
  }else{
    toast.error("No such user found!")
  }
}
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search..." className="input input-bordered rounded-full" value={search}
        onChange={(e) => setSearch(e.target.value)}/>
        <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <IoSearchSharp className="w-6 h-6 outline-none"/>
        </button>
    </form>
  )
}

export default SearchInput

//STARTER CODE FOR SEARCH INPUT 
// import { IoSearchSharp} from "react-icons/io5";
// const SearchInput = () => {
//   return (
//     <form >
//         <input type="text" placeholder="Search..." className="input input-bordered rounded-full"/>
//         <button type="submit" className="btn btn-circle bg-sky-500 text-white">
//         <IoSearchSharp className="w-6 h-6 outline-none"/>
//         </button>
//     </form>
//   )
// }

// export default SearchInput