import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { FaSearch } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import { FaRegCircleUser } from "react-icons/fa6";
import { RiEditCircleLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";

const App = () => {
  const [contacts, setContacts] = useState([]);

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
        <FaPlusCircle className="cursor-pointer text-[40px] text-white" />
      </div>

      <div className="mt-5">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="flex items-center rounded-lg  justify-around bg-yellow p-2"
          >
            <div className="flex gap-2 items-center">
              <FaRegCircleUser className="text-4xl text-orange" />
              <div className="">
                <h2 className="font-medium">{contact.name}</h2>
                <p className="text-sm">{contact.email}</p>
              </div>
            </div>

            <div className="flex text-3xl">
              <RiEditCircleLine />
              <IoMdTrash className="text-orange" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
