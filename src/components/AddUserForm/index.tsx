import { FC, useCallback } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../styled/Input";
import { ErrorText, Form, FormItem } from "./style";

export type AddUserFormValues = {
  firstName: string;
    lastName: string;
    address_1: string;
    address_2: string;
    town: string;
    region: string;
    country: string;
    postcode: string;
    contact_number: string;
};

const AddUserForm: FC<{
  onSubmit: (value: AddUserFormValues) => Promise<void>;
}> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<AddUserFormValues>();

  const onFormSubmit = useCallback(
    async (data: AddUserFormValues) => {
      try {
        await onSubmit(data);
        //redirect here
      } finally {
        //do nothing
      }
    },
    [onSubmit]
  );

  return (
    <Form onSubmit={handleSubmit(onFormSubmit)}>
      <FormItem>
        <label htmlFor="userName">First name:</label>
        <Input
          type="text"
          id="firstName"
          placeholder="First name (e.g. John)"
          {...register("firstName", { required: "First name is required" })}
        />
        {errors.firstName && <ErrorText>{errors.firstName.message}</ErrorText>}
      </FormItem>
      <FormItem>
        <label htmlFor="userName">Last name:</label>
        <Input
          type="text"
          id="lastName"
          placeholder="Last name (e.g. Doe)"
          {...register("lastName", { required: "Last name is required" })}
        />
        {errors.lastName && <ErrorText>{errors.lastName.message}</ErrorText>}
      </FormItem>
      <FormItem>
        <label htmlFor="userName">Address 1:</label>
        <Input
          type="text"
          id="address_1"
          placeholder="Address 1 (e.g. 123 Main St)"
          {...register("address_1", { required: "Address is required" })}
        />
        {errors.address_1 && <ErrorText>{errors.address_1.message}</ErrorText>}
      </FormItem>
      <FormItem>
        <label htmlFor="userName">Address 2:</label>
        <Input
          type="text"
          id="address_2"
          placeholder="Address 2 (e.g. 123 Main St)"
          {...register("address_2")}
        />
        {errors.address_2 && <ErrorText>{errors.address_2.message}</ErrorText>}
      </FormItem>
      <button type="submit">Add user</button>
    </Form>
  );
};

export default AddUserForm;