import { z } from "zod";

const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const useForm = <T extends object>(
  schema: z.Schema<T>,
  onSubmit: (data: T) => void
) => {
  return {
    onSubmit: (data: unknown) => {
      const newValues = schema.parse(data);
      onSubmit(newValues);
    },
  };
};

export default function App() {
  const { onSubmit } = useForm(LoginFormSchema, (data) => {
    console.log(data);
  });

  return <div>App</div>;
}
