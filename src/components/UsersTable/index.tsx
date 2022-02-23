import React, { Dispatch, FC } from "react";
import { Link } from "react-router-dom";
import { Action } from "../../state/actions";
import { DocumentData } from "@firebase/firestore";

import { Wrapper } from "./style";
import { LoadingBlock } from "../LoadingBlock";

type UsersTableProps = {
  users: any[];
  deleteUser: (dispatch: Dispatch<Action>) => Promise<void>;
  loading: boolean;
};
const UsersTable: FC<UsersTableProps> = ({ users, deleteUser, loading }) => {
  return (
    <Wrapper>
      <Link to="/add-user">
        <button className="add-button">Add user</button>
      </Link>

      <div className="web-table">
        {loading ? (
          <LoadingBlock />
        ) : (
          <>
            <div className="table-header">
              <li className="header-item">Name</li>

              <li className="header-item">Address</li>
              <li className="header-item">Contact Number</li>

              <li className="header-item">town</li>
              <li className="header-item">region</li>

              <li className="header-item">Country</li>
              <li className="header-item">Post code</li>
            </div>

            {users.map((user: DocumentData) => (
              <div className="table-row" key={user.id}>
                <div className="body-item">
                  {user.first_name} {user.last_name}
                </div>
                <li className="body-item">{user.address_1}</li>
                <li className="body-item">{user.contact_number}</li>
                <li className="body-item">{user.town}</li>
                <li className="body-item">{user.region}</li>
                <li className="body-item">{user.country}</li>
                <li className="body-item">{user.post_code}</li>
                <li className="body-item">
                  <Link to={`/edit-user/${user.id}`}>
                    <span className="edit-btn">Edit</span>
                  </Link>
                  <span onClick={() => deleteUser(user.id)} className="delete-btn">Delete</span>
                </li>
              </div>
            ))}
          </>
        )}
      </div>
    </Wrapper>
  );
};

export default UsersTable;
