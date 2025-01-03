import { IoMdClose } from "react-icons/io";
import {createPortal} from "react-dom"

const Modals = ({ isOpen, onClose, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <>
          <div className="relative z-20 m-auto min-h-[200px] max-w-[80%] bg-white p-4">
            <div className="flex justify-end">
              <IoMdClose
                onClick={onClose}
                className="cursor-pointer text-3xl"
              />
            </div>
            {children}
          </div>
          <div
            onClick={onClose}
            className="z-100 absolute top-0 h-screen w-screen backdrop-blur"
          ></div>
        </>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modals;
