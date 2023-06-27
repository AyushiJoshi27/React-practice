import React from 'react'
import { useForm } from "react-hook-form";

const Input = ({ label, register, required }) => (
  <>
    <label>{label}</label>
    <input {...register(label, { required })} />
  </>
);

const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
  <>
    <label>{label}</label>
    <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  </>
));

export const IntegrateForm = () => {
  const { register, handleSubmit, formState: { errors }} = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <>
    <h3>Form</h3>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="firstName" register={register} required />
      {errors?.firstName?.type === "required" && <p>This field is required</p>}
      {errors?.firstName?.type === "maxLength" && (
        <p>First name cannot exceed 20 characters</p>
      )}
      <Select label="Age" {...register("Age")} />
      <input type="submit" />
    </form>
    </>
  );
};