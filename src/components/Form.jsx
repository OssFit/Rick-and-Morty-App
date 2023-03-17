import { useState, useEffect } from "react";
import validate from "./validation";
import styles from "./Form.module.css";

export default function Form({ login }) {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({
      ...userData,
      [property]: value,
    });
  };

  useEffect(() => {
    setErrors(validate(userData));
  }, [userData]);

  const handleSubmit = () => {
    login(userData);
  };

  return (
    <div className={styles.div}>
      <form onSubmit={handleSubmit}>
        <label className={styles.label}>
          <p className={styles.pUser}>User:</p>
          <input
            className={styles.user}
            name="username"
            value={userData.username}
            onChange={handleInputChange}
            type="text"
          />
          <p className={styles.pErrorU}>{errors.username}</p>
          <p className={styles.pPassword}>Password:</p>
          <input
            className={styles.pass}
            name="password"
            value={userData.password}
            onChange={handleInputChange}
            type="password"
          />
          <p className={styles.pErrorP}>{errors.password}</p>
          <button type="submit" className={styles.btnLogin}>
            Login
          </button>
          <p className={styles.data}>USER: ejemplo@gmail.com</p>
      <p className={styles.data}>PASS:Password123</p>
        </label>
       
      </form>
     
    </div>
  );
}
