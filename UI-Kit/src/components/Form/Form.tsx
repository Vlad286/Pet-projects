import React from "react";
import { useState } from "react";
import styles from "./Form.module.scss";
import OpenEyeIcon from '../../assets/icons/openEye.svg';
import CloseEyeIcon from '../../assets/icons/closeEye.svg';

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateForm = (): Partial<FormData> => {
    const newErrors: Partial<FormData> = {};
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email) {
      newErrors.email = "Please enter an email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.password) {
      newErrors.password = "Please enter your password";
    } else if (formData.password.length < 4) {
      newErrors.password = "Password must contain at least 4 symbols";
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords don't match";
    }
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors(validateForm());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
      }, 1000);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={`${styles.form_username} ${errors.username ? styles.error_border : ""}`}>
        <label className={styles.form_username_title}>Username</label>
        <input
          className={styles.form_username_item}
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter your username"
        />
      </div>
      {errors.username && <span className={styles.error}>{errors.username}</span>}

      <div className={`${styles.form_email} ${errors.email ? styles.error_border : ""}`}>
        <label className={styles.form_email_title}>Email</label>
        <input
          className={styles.form_email_item}
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
      </div>
      {errors.email && <span className={styles.error}>{errors.email}</span>}

      <div className={`${styles.form_password} ${errors.password ? styles.error_border : ""}`}>
        <label className={styles.form_password_title}>Password</label>
        <input
          className={styles.form_password_item}
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
        <button className={styles.form_password_item_img} type="button" onClick={togglePasswordVisibility}>
          {showPassword ? <img src={CloseEyeIcon} alt="Close eye icon" /> : <img src={OpenEyeIcon} alt="Open eye icon" />}
        </button>
      </div>
      {errors.password && <span className={styles.error}>{errors.password}</span>}

      <div className={`${styles.form_confirm_password} ${errors.confirmPassword ? styles.error_border : ""}`}>
        <label className={styles.form_confirm_password_title}>Confirm Password</label>
        <input
          className={styles.form_confirm_password_item}
          type={showConfirmPassword ? "text" : "password"}
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Enter your password"
        />
        <button
          className={styles.form_confirm_password_item_img}
          type="button"
          onClick={toggleConfirmPasswordVisibility}
        >
          {showConfirmPassword ? <img src={CloseEyeIcon} alt="Close eye icon" /> : <img src={OpenEyeIcon} alt="Open eye icon" />}
        </button>
      </div>
      {errors.confirmPassword && <span className={styles.error}>{errors.confirmPassword}</span>}

      <button
        type="submit"
        className={styles.form_register_btn}
        disabled={isSubmitting}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
