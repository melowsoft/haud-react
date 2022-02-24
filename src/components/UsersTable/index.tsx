import { Dispatch, FC } from "react";
import { useHistory } from "react-router-dom";
import { Action } from "../../state/actions";
import { DocumentData } from "@firebase/firestore";

import { Wrapper } from "./style";
import { LoadingBlock } from "../LoadingBlock";

type UsersTableProps = {
  users: DocumentData[];
  deleteUser: (dispatch: Dispatch<Action>) => Promise<void>;
  loading: boolean;
};
const UsersTable: FC<UsersTableProps> = ({ users, deleteUser, loading }) => {
  const history = useHistory();
  const navigateToAdduser = (userId: string) => {
    return history.replace(`/edit-user/${userId}`);
  };

  const navigateToAddUser = () => history.replace("/add-user");

  return (
    <Wrapper>
        <button onClick={navigateToAddUser} className="add-button">Add user</button>
    

      <div className="web-table">
        {loading ? (
          <LoadingBlock />
        ) : (
          <>
            <ul className="table-header">
              <li className="header-item">Name</li>

              <li className="header-item">Address</li>
              <li className="header-item">Contact Number</li>

              <li className="header-item">town</li>
              <li className="header-item">region</li>

              <li className="header-item">Country</li>
              <li className="header-item">Post code</li>
            </ul>

            {users.map((user: DocumentData) => (
              <ul role={"row"} className="table-row" key={user.id}>
                <li role={"cell"} className="body-item">
                  {user.first_name} {user.last_name}
                </li>
                <li role={"cell"} className="body-item">
                  {user.address_1}
                </li>
                <li role={"cell"} className="body-item">
                  {user.contact_number}
                </li>
                <li role={"cell"} className="body-item">
                  {user.town}
                </li>
                <li role={"cell"} className="body-item">
                  {user.region}
                </li>
                <li role={"cell"} className="body-item">
                  {user.country}
                </li>
                <li role={"cell"} className="body-item">
                  {user.post_code}
                </li>
                <li role={"cell"} className="body-item">
                  <span
                    onClick={() => navigateToAdduser(user.id)}
                    className="edit-btn"
                  >
                    Edit
                  </span>

                  <span
                    onClick={() => deleteUser(user.id)}
                    className="delete-btn"
                  >
                    Delete
                  </span>
                </li>
              </ul>
            ))}
          </>
        )}
      </div>
    </Wrapper>
  );
};

export default UsersTable;
