import { useCallback, useMemo } from "react";
import UserForm, { UserFormValues } from "../UserForm";
import { Container, FormTitle, Wrapper } from "./style";
import { v4 as uuidv4 } from "uuid";
import { useActions } from "../../hooks/useAction";
import { useHistory, useParams } from "react-router-dom";
import { getDoc, doc } from "@firebase/firestore";
import { database } from "../../config/firebase";

interface RouteParams {
  id: string;
}

const EditUser = () => {
  const { addUser } = useActions();
  const history = useHistory();

  const { id } = useParams<RouteParams>();

  if (!id) { 
    history.replace("/");
  }

  const user = useMemo(async () => {
    const docRef = doc(database, "users", id);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  }, [id]);
  

  console.log(user, "data things");

  const onEditUser = useCallback(
    async (values: UserFormValues) => {
      const newUser = { ...values, id: uuidv4() };
      try {
        addUser(newUser);
      } finally {
        history.replace("/");
      }
    },
    [addUser]
  );

  return (
    <Wrapper>
      <FormTitle>Edit User Details</FormTitle>
      <Container>
        <UserForm onSubmit={onEditUser} user={user}/>
      </Container>
    </Wrapper>
  );
};

export default EditUser;
