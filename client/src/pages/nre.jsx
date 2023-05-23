// import React, { useState } from "react";
// import styled from "styled-components";
// import { Link, useNavigate } from "react-router-dom";
// import { ReactComponent as Logo } from "../assets/icon.svg";
// import { toast, Toaster } from "react-hot-toast";
// import axios from "axios";
// import { registerRoute } from "../utils/APIRoutes";

// export const Regist = () => {
//   const navigate = useNavigate();
//   const [values, setValues] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (handleValidation()) {
//       const { email, username, password } = values;
//       const { data } = await axios.post(registerRoute, {
//         username,
//         email,
//         password,
//       });

//       if (data.status === false) {
//         toast.error(data.message, toastOptions);
//       }
//       if (data.status === true) {
//         localStorage.setItem(
//           "chat-user",
//           // import.meta.env.VITE_REACT_APP_LOCALHOST_KEY,
//           JSON.stringify(data.user)
//         );
//         navigate("/");
//       }
//     }
//   };

//   const toastOptions = {
//     icon: "❌",
//     // style: {
//     //   borderRadius: "4px",
//     //   background: "#333",
//     //   color: "#fff",
//     // },
//   };

//   const handleValidation = () => {
//     const { password, confirmPassword, username, email } = values;
//     if (password !== confirmPassword) {
//       toast.error("Password and Confirm Password should be same", toastOptions);
//       return false;
//     } else if (username.length < 3) {
//       toast.error(
//         "Username should be greather than 3 characters",
//         toastOptions
//       );
//       return false;
//     } else if (password.length < 8) {
//       toast.error(
//         "Password should be greather than or equal to 8 characters",
//         toastOptions
//       );
//       return false;
//     } else if (email === "") {
//       toast.error("Email is required", toastOptions);
//       return false;
//     }
//   };

//   const handleChange = (event) => {
//     setValues({ ...values, [event.target.name]: event.target.value });
//   };

//   return (
//     <>
//       <FormContainer>
//         <form autoComplete="off" onSubmit={(event) => handleSubmit(event)}>
//           <div className="brand">
//             {/* <img src={<Logo/>} alt="logo" /> */}
//             <div className="img">
//               <Logo />
//             </div>
//             <h1>Chatify</h1>
//           </div>
//           <input
//             type="text"
//             placeholder="Username"
//             name="username"
//             onChange={(e) => handleChange(e)}
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             name="email"
//             onChange={(e) => handleChange(e)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             name="password"
//             onChange={(e) => handleChange(e)}
//           />
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             name="confirmPassword"
//             onChange={(e) => handleChange(e)}
//           />
//           <button type="submit">Create User</button>

//           <span>
//             Already have an account ? <Link to="/login">Login</Link>
//           </span>
//         </form>
//       </FormContainer>
//       <Toaster position="top-center" reverseOrder={false} />
//     </>
//   );
// };

// const FormContainer = styled.div`
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   gap: 1rem;
//   align-items: center;
//   background-color: #131324;
//   .brand {
//     display: flex;
//     align-items: center;
//     gap: 1rem;
//     justify-content: center;
//     .img {
//       height: 5rem;
//     }
//     h1 {
//       color: white;
//       text-transform: uppercase;
//     }
//   }
//   form {
//     display: flex;
//     flex-direction: column;
//     gap: 2rem;
//     background-color: #00000076;
//     border-radius: 2rem;
//     padding: 3rem 5rem;
//   }
//   input {
//     background-color: transparent;
//     padding: 1rem;
//     border: 0.1rem solid #4e0eff;
//     border-radius: 0.4rem;
//     color: white;
//     width: 100%;
//     font-size: 1rem;
//     &:focus {
//       border: 0.1rem solid #997af0;
//       outline: none;
//     }
//   }
//   button {
//     background-color: #4e0eff;
//     color: white;
//     padding: 1rem 2rem;
//     border: none;
//     font-weight: bold;
//     cursor: pointer;
//     border-radius: 0.4rem;
//     font-size: 1rem;
//     text-transform: uppercase;
//     &:hover {
//       background-color: #4e0eff;
//     }
//   }
//   span {
//     color: white;
//     text-transform: uppercase;
//     a {
//       color: #4e0eff;
//       text-decoration: none;
//       font-weight: bold;
//     }
//   }
// `;
