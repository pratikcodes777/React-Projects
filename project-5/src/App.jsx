import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { FaSearch } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import Modals from "./components/Modals"


import ContactCard from "./components/ContactCard";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [isOpen , setIsOpen] = useState(false);

  const onOpen = () =>{
    setIsOpen(true)
  }

  const onClose = () =>{
    setIsOpen(false)
  }




  useEffect(() => {
    const getContacts = async () => {
      try {
        const collectionRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(collectionRef);
        const contactsList = contactsSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactsList);
      } catch (error) {}
    };
    getContacts();
  }, []);

  return (
    <>
    <div className="mx-auto max-w-[370px] px-4">
      <Navbar></Navbar>

      <div className="flex gap-2">
        <div className="relative flex flex-grow items-center">
          <FaSearch className="absolute ml-1 text-2xl text-white"></FaSearch>
          <input
            type="text"
            placeholder="Search Contact"
            className="h-10 flex-grow rounded-md border border-white bg-transparent pl-9 text-white"
          />
        </div>
        <FaPlusCircle onClick={onOpen} className="cursor-pointer text-[40px] text-white" />
      </div>

      <div className="mt-5 flex flex-col gap-3">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
        
        <Modals
        isOpen={isOpen}
        onClose={onClose}
        >Hi</Modals>
    </>
  );
};

export default App;
