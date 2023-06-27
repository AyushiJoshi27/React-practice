import { useForm } from "react-hook-form";

export default function RegisterValues() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="FormContainer">
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName")} />
            <select {...register("gender")}>
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="other">other</option>
            </select>
            <input placeholder="firstname" {...register("firstName", { required: true, maxLength: 20 })} />
            <input placeholder="lastname" {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
            <input placeholder="number" type="number" {...register("age", { min: 18, max: 99 })} />
        </form>
        <div >
          <input type="submit" />
        </div>
    </div>
  );
}