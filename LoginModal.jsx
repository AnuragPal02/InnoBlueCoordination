import React from "react";
import Modal from "react-modal";
import "./LoginModal.css";
import { useForm } from "react-hook-form";

const LoginModal = ({ isOpen, onRequestClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // You can access the form data here

    // Close the modal
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal-overlay"
      overlayClassName="modal-overlay"
    >
      <div className="modal-content">
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              {...register("username", { required: "Username is required" })}
            />
            {errors.username && (
              <p className="error-message text-danger">
                {errors.username.message}
              </p>
            )}
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="error-message text-danger">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="btn-container">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onRequestClose}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default LoginModal;
