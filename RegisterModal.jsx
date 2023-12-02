import React from "react";
import Modal from "react-modal";
import "./RegisterModal.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
const RegisterModal = ({ isOpen, onRequestClose }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let [err, setError] = useState("");
  const onSubmit = (newUser) => {
    // You can access the form data here
    axios
      .post("http://localhost:3800/RegisterApi/createuser", newUser)
      .then((res) => {
        if (res.status === 201) {
          navigate("./login");
        } else {
          setError(res.data.message);
        }
      })
      .catch((err) => {
        if (err.res) setError(err.message);
        else if (err.request) setError(err.request);
        else setError(err.message);
      });
    // Add your registration logic here
    // Close the modal
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          backgroundColor: "rgba(1,1,1, 0.5)",
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
      }}
    >
      <div className="register-modal-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {err.length != 0 && <p className="lead">{err}</p>}
          <label className="register-label">
            Username:
            <input
              type="text"
              {...register("username", {
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "Username must be at least 3 characters",
                },
              })}
              className="register-input"
            />
            {errors.username && (
              <p className="error-message text-danger">
                {errors.username.message}
              </p>
            )}
          </label>
          <label className="register-label">
            Email:
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              })}
              className="register-input"
            />
            {errors.email && (
              <p className="error-message text-danger">
                {errors.email.message}
              </p>
            )}
          </label>
          <label className="register-label">
            Password:
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="register-input"
            />
            {errors.password && (
              <p className="error-message text-danger">
                {errors.password.message}
              </p>
            )}
          </label>
          <button type="submit" className="register-btn">
            Register
          </button>
        </form>
        <button onClick={onRequestClose} className="close-register-btn">
          Close
        </button>
      </div>
    </Modal>
  );
};

export default RegisterModal;
