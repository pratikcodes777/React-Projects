import Modals from "./Modals";
import { Formik, Form, Field } from "formik";
const AddAndUpdate = ({ isOpen, onClose }) => {
  return (
    <div>
      <Modals isOpen={isOpen} onClose={onClose}>
        <Formik
        initialValues={{
            name : "" ,
            email: ""
        }}
        onSubmit={(values) => {
            console.log(values)
        }}
        >
          <Form className="flex flex-col gap-2 ">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field className="h-9 border-2" name="name"></Field>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <Field className="h-9 border-2" name="email"></Field>
            </div>
            <button className="border-2 rounded-md bg-orange px-5 py-1 self-end">Add Contact</button>
          </Form>
        </Formik>
      </Modals>
    </div>
  );
};

export default AddAndUpdate;
