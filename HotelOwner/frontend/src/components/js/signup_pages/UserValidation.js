const yup = require("yup");

const Validation = yup.object().shape({
  firstname: yup.string().required("Required"),
  lastname: yup.string().required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  username:yup.string().required("Required"),
  password: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  birthday: yup.date().required("Required"),
  nic: yup.string().required("Required"),
  hotel:yup.string().required("Required"),
  hotelcontact:yup.number().required("Required"),
  address:yup.string().required("Required"),
})

export default Validation;