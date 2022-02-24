import { FC, useMemo } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../styled/Input";
import {
  Button,
  ButtonWrap,
  Divider,
  ErrorText,
  Form,
  FormItem,
} from "./style";
import { Country, State } from "country-state-city";
import { Dropdown } from "../Select";
import { DocumentData } from "@firebase/firestore";
import { useHistory } from "react-router-dom";

export type UserFormValues = {
  first_name: string;
  last_name: string;
  address_1: string;
  address_2: string;
  town: string;
  region: string;
  country: string;
  post_code: string;
  contact_number: string;
};

const UserForm: FC<{
  onSubmit: (value: UserFormValues) => Promise<void>;
  user?: DocumentData | undefined;
}> = ({ onSubmit, user }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormValues>();

  const history = useHistory();

  //Countries formatter for country dropdown
  const countriesObj = useMemo(() => {
    const empty = [
      {
        value: "",
        label: "Select Country",
        id: "rtyuyutdfas",
      },
    ];
    const newArr =
      Country.getAllCountries().map((country, index) => {
        return {
          value: country.name,
          label: country.name,
          id: index,
        };
      }) || [];
    const countries = [...empty, ...newArr];
    return countries;
  }, []);

  //States formatter for state dropdown
  const regionsObj = useMemo(() => {
    const empty = [
      {
        value: "",
        label: "Select Region",
        id: "rtyuyuty",
      },
    ];
    const newArr =
      State.getAllStates().map((state, index) => {
        return {
          value: state.isoCode,
          label: state.isoCode,
          id: index,
        };
      }) || [];
    const regions = [...empty, ...newArr];
    return regions;
  }, []);

  //Navigator function
  const navigateHome = () => history.replace("/");

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Divider>
        <FormItem>
          <label htmlFor="first_name">First name:</label>
          <Input
            role={'textbox'}
            data-testid="first_name"
            defaultValue={user?.first_name}
            type="text"
            id="first_name"
            placeholder="First name (e.g. John)"
            {...register("first_name", { required: "First name is required" })}
          />
          {errors.first_name && (
            <ErrorText>{errors.first_name.message}</ErrorText>
          )}
        </FormItem>
        <FormItem>
          <label htmlFor="last_name">Last name:</label>
          <Input
            role={'textbox'}
            defaultValue={user?.last_name}
            data-testid="last_name"
            type="text"
            id="last_name"
            placeholder="Last name (e.g. Doe)"
            {...register("last_name", { required: "Last name is required" })}
          />
          {errors.last_name && (
            <ErrorText>{errors.last_name.message}</ErrorText>
          )}
        </FormItem>
      </Divider>

      <Divider>
        <FormItem>
          <label htmlFor="address_1">Address 1:</label>
          <Input
            role={'textbox'}
            defaultValue={user?.address_1}
            data-testid="address_1"
            type="text"
            id="address_1"
            placeholder="Address 1 (e.g. 123 Main St)"
            {...register("address_1", { required: "Address is required" })}
          />
          {errors.address_1 && (
            <ErrorText>{errors.address_1.message}</ErrorText>
          )}
        </FormItem>
        <FormItem>
          <label htmlFor="address_2">Address 2:</label>
          <Input
            role={'textbox'}
            defaultValue={user?.address_2}
            data-testid="address_2"
            type="text"
            id="address_2"
            placeholder="Address 2 (e.g. 123 Main St)"
            {...register("address_2")}
          />
          {errors.address_2 && (
            <ErrorText>{errors.address_2.message}</ErrorText>
          )}
        </FormItem>
      </Divider>

      <Divider>
        <FormItem>
          <label htmlFor="town">Town:</label>
          <Input
            role={'textbox'}
            defaultValue={user?.town}
            data-testid="town"
            type="text"
            id="town"
            placeholder="Town (e.g. Lutton)"
            {...register("town")}
          />
          {errors.town && <ErrorText>{errors.town.message}</ErrorText>}
        </FormItem>
        <FormItem>
          <label htmlFor="region">Region:</label>
          <Dropdown
            initialValue={user?.region}
            data-testid="region"
            id="region"
            data={regionsObj}
            {...register("region", { required: "Region is required" })}
          />
          {errors.region && <ErrorText>{errors.region.message}</ErrorText>}
        </FormItem>
      </Divider>

      <Divider>
        <FormItem>
          <label htmlFor="country">Country:</label>
          <Dropdown
            initialValue={user?.country}
            data-testid="country"
            id="country"
            data={countriesObj}
            {...register("country", { required: "Country is required" })}
          />
          {errors.country && <ErrorText>{errors.country.message}</ErrorText>}
        </FormItem>
        <FormItem>
          <label htmlFor="post_code">Post code:</label>
          <Input
            role={'textbox'}
            defaultValue={user?.post_code}
            data-testid="post_code"
            type="text"
            id="post_code"
            placeholder="Post code (e.g. 12345)"
            {...register("post_code")}
          />
          {errors.post_code && (
            <ErrorText>{errors.post_code.message}</ErrorText>
          )}
        </FormItem>
      </Divider>
      <FormItem>
        <label htmlFor="contact_number">Contact Number:</label>
        <Input
          role={'textbox'}
          defaultValue={user?.contact_number}
          data-testid="contact_number"
          type="text"
          id="contact_number"
          placeholder="Contact number (e.g. 017843438993)"
          {...register("contact_number")}
        />
        {errors.contact_number && (
          <ErrorText>{errors.contact_number.message}</ErrorText>
        )}
      </FormItem>

      <ButtonWrap>
        <Button color="red" onClick={() => navigateHome()}>
          Cancel
        </Button>
        <Button type="submit">Submit</Button>
      </ButtonWrap>
    </Form>
  );
};

export default UserForm;
