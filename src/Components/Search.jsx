import React, { useState } from 'react'
import { collection, getDocs, query, where } from "firebase/firestore";
import {db} from "../firebase"

const Search = () => {
  const [userName, setUserName] = useState("")
  const [user, setUser] = useState("")
  const [err, setErr] = useState("")

  const handleSearch = async () => {
    const q = query(collection(db, "users"), where("displayName", "==", userName))
    
    try{
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        setUser(doc.data())
});
  
    }catch{
      setErr(true)
    }
  }

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch()
  }
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" name="" id="" placeholder='Search a user'onKeyDown={handleKey} onChange={e => setUserName(e.target.value)}/>
      </div>
      {err && <span>User Not Found</span>}
      {user && <div className='userChat'>
        <img src={user.photoURL} alt="" />
        <div className="userChatInfo">
          <span>{user.displayName}</span>
        </div>
      </div>}
    </div>
  )
}

export default Search