import { useCallback, useEffect, useState } from "react";
import UserForm, { UserFormValues } from "../UserForm";
import { Container, FormTitle, Wrapper } from "./style";
import { useActions } from "../../hooks/useAction";
import { useHistory, useParams } from "react-router-dom";
import { getDoc, doc, DocumentData } from "@firebase/firestore";
import { database } from "../../config/firebase";

interface RouteParams {
  id: string;
}

const EditUser = () => {
  const [result, setResult] = useState<DocumentData | undefined>()
  const {  editUser } = useActions();
  const history = useHistory();

  const { id } = useParams<RouteParams>();

  if (!id) { 
    history.replace("/");
  }


useEffect(() => {
  let active = true
  getUserDetails()
  return () => { active = false }

  async function getUserDetails() {
    setResult(undefined)
    const docRef = doc(database, "users", id);
    const docSnap = await getDoc(docRef);
    const res = await docSnap.data();
    setResult(res)
  }
}, [id])
  

  const onEditUser = useCallback(
    async (values: UserFormValues) => {
      const editedUser = { ...values };
      
      try {
        editUser(editedUser, id);
      } finally {
        history.replace("/");
      }
    },
    [editUser, id, history]
  );

  
  return (
    <Wrapper>
      <FormTitle>Edit User Details</FormTitle>
      <Container>
        <UserForm onSubmit={onEditUser} user={result}/>
      </Container>
    </Wrapper>
  );
};

export default EditUser;
