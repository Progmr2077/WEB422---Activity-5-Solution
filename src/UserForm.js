import React from "react";
import { useForm } from "react-hook-form";

const UserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
      <h2>User Information Form</h2>

      {/* Name Field */}
      <label style={styles.label}>Name:</label>
      <input
        type="text"
        {...register("name", { required: "Name is required" })}
        style={styles.input}
      />
      {errors.name && <p style={styles.error}>{errors.name.message}</p>}

      {/* ID Field */}
      <label style={styles.label}>ID:</label>
      <input
        type="number"
        {...register("id", { required: "ID is required", valueAsNumber: true })}
        style={styles.input}
      />
      {errors.id && <p style={styles.error}>{errors.id.message}</p>}

      {/* Program Field */}
      <label style={styles.label}>Program:</label>
      <select {...register("program", { required: "Program is required" })} style={styles.input}>
        <option value="">Select Program</option>
        <option value="Computer Science">Computer Science</option>
        <option value="Engineering">Engineering</option>
        <option value="Mathematics">Mathematics</option>
      </select>
      {errors.program && <p style={styles.error}>{errors.program.message}</p>}

      {/* Submit Button */}
      <button type="submit" style={styles.button}>Submit</button>
    </form>
  );
};

// Inline CSS Styles
const styles = {
  form: { display: "flex", flexDirection: "column", maxWidth: "350px", margin: "20px auto" },
  label: { fontWeight: "bold", marginBottom: "5px" },
  input: { padding: "8px", marginBottom: "10px", border: "1px solid #ccc", borderRadius: "5px" },
  button: { padding: "10px", background: "#007bff", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" },
  error: { color: "red", fontSize: "12px", marginBottom: "10px" },
};

export default UserForm;