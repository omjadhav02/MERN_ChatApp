import Conversation from "../sidebar/Conversation"
import useGetConversations from '../../hooks/useGetConversation'
import { getRandomEmoji } from "../../utils/emojis";
import { useEffect } from "react";
const Conversations = () => {
  const {loading, conversations} = useGetConversations();
  console.log("CONVERSATION: " , conversations)

  return (
    <div className='py-2 flex flex-col overflow-auto'>
        
        {conversations.map((conversation,idx)=>(
          <Conversation key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length - 1}
          ></Conversation>

        ))}
        {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
    </div>
  )
}

export default Conversations


//STARTER CODE 
// import React from 'react'
// import Conversation from "../sidebar/Conversation"
// const Conversations = () => {
//   return (
//     <div className='py-2 flex flex-col overflow-auto'>
        
//         <Conversation></Conversation>
//         <Conversation></Conversation>
//         <Conversation></Conversation>
//         <Conversation></Conversation>
//         <Conversation></Conversation>
//         <Conversation></Conversation>

//     </div>
//   )
// }

// export default Conversations