import React, { Dispatch, FC } from "react";
import { Link } from "react-router-dom";
import { Action } from "../../state/actions";
import {DocumentData} from "@firebase/firestore"

import { Wrapper } from "./style";

type UsersTableProps = {
  users: any[];
  deleteUser: (dispatch: Dispatch<Action>) => Promise<void>
};
const UsersTable: FC<UsersTableProps> = ({ users, deleteUser }) => {
  return (
    <Wrapper>
      <Link to="/add-user">
        <button className="add-button">Add user</button>
      </Link>
      <div className="web-table">
        <div className="table-header">
          <div className="header-item">Name</div>

          <div className="header-item">Address</div>
          <div className="header-item">Contact Number</div>

          <div className="header-item">town</div>
          <div className="header-item">region</div>

          <div className="header-item">Country</div>
          <div className="header-item">Post code</div>
        </div>

        {users.map((user: DocumentData) => (
          <div className="table-row" key={user.id}>
            <div className="body-item">
              {user.first_name} {user.last_name}
            </div>
            <div className="body-item">{user.address_1}</div>
            <div className="body-item">{user.contact_number}</div>
            <div className="body-item">{user.town}</div>
            <div className="body-item">{user.region}</div>
            <div className="body-item">{user.country}</div>
            <div className="body-item">{user.post_code}</div>
            <div className="body-item">
              <Link to={`/edit-user/${user.id}`}>
                <span style={{ marginRight: 5 }}>Edit</span>
              </Link>
              <span onClick={() => deleteUser(user.id)}>Delete</span>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default UsersTable;
