import { useForm } from "react-hook-form";

export default function ErrorHandlingForm() {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(errors);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <br />
      <input
        {...register("firstName", { required: true })}
        aria-invalid={errors.firstName ? "true" : "false"}
        placeholder="firstname"
      />
      {errors.firstName?.type === 'required' && <p role="alert">First name is required</p>}
      <br /><br /><br />
      <input
        {...register("mail", { required: "Email Address is required" })}
        aria-invalid={errors.mail ? "true" : "false"}
        placeholder="email"
        type="mail"
      />
      {errors.mail && <p role="alert">{errors.mail?.message}</p>}
      <br /><br /><br />
      <input
        {...register("password", { required: "password Address is required" })}
        aria-invalid={errors.mail ? "true" : "false"}
        placeholder="password"
        type="password"
      />
      {errors.password && <p role="alert">{errors.password?.message}</p>}
      <br /><br /><br />
      <input 
        aria-invalid={errors.age ? "true" : "false"}
        placeholder="age"
        type="number"
        {...register("age", { required: "Age is required.", min: 18, max: 99 } )} 
      />
      {errors.age && (
        // <p>You Must be older then 18 and younger then 99 years old</p>
        <p>Age should be there.</p>
      )}
      <br /><br /><br />
      <input type="submit" />
    </form>
  );
}