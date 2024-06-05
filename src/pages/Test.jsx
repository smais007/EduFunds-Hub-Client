import { useForm } from "react-hook-form";

const Test = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Name" {...register("name")} />
        <input type="file" {...register("image")} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Test;
