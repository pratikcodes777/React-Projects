import { FaRegCircleUser } from "react-icons/fa6";
import { RiEditCircleLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";

const ContactCard = ({contact}) => {
    return ( 
        <div
            key={contact.id}
            className="flex items-center justify-between rounded-lg bg-yellow p-2"
          >
            <div className="flex items-center gap-2">
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
     );
}
 
export default ContactCard;