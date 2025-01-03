import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { FaSearch } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import {collection, getDoc, getDocs} from 'firebase/firestore';
import {db} from './config/firebase';

const App = () => {

  const [contact, setContact] = useState([])

  useEffect(() =>{
    const getContacts = async() =>{
      try {
        const collectionRef = collection(db , "contacts")
        const contactsSnapshot = await getDocs(collectionRef)
        const contactsList = contactsSnapshot.docs.map((doc)=> {
          return{
            id : doc.id , 
            ...doc.data(),
          }
        })
        setContact(contactsList)
      } catch (error) {
        
      }
    }
    getContacts()
  }, [])

  return (
    <div className="mx-auto max-w-[370px] px-4">
      <Navbar></Navbar>

      <div className="flex gap-2">
        <div className="relative flex items-center flex-grow">
          <FaSearch className="absolute ml-1 text-2xl text-white"></FaSearch>
          <input
            type="text"
            placeholder="Search Contact"
            className="h-10 flex-grow rounded-md border border-white bg-transparent pl-9 text-white"
          />
        </div>
          <FaPlusCircle className="text-white text-[40px] cursor-pointer" />
      </div>
    </div>
  );
};

export default App;
