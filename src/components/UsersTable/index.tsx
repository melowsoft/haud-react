import React, { FC, useState} from 'react'

import { Wrapper } from "./style"

type UsersTableProps = {
users: any[]
}
 const UsersTable: FC<UsersTableProps> = ({users}) => {

    return (
        <Wrapper>
						<button className='add-button'>Add user</button>
            <div className="web-table">
                <div className="table-header">
                    <div className="header-item">
                       Name
                    </div>

                    <div className="header-item">
                   Address
						</div>
						<div className="header-item">
                   town
                    </div>
                    <div className="header-item">
                   region
                    </div>

                    <div className="header-item">
                  Country
                    </div>
                </div>

                {
                   users.map((user) => (
                            <div className='table-row' key={user.id}>
                            <div className="body-item">
                               {user.first_name} {user.last_name}
                            </div>
                            <div className="body-item">
                           123 Main St
                            </div>
                            <div className="body-item">
                           {user.town}
                            </div>
                            <div className="body-item">
                            Anytown
                            </div>
                            <div className="body-item">
                            USA
                            </div>
                            <div className="body-item">
                            <span style={{marginRight: 5}}>edit</span>
                            <span>delete</span>
                            </div>
                        </div>
                      ))
                }
            </div>

        </Wrapper>
    )
 }


export default UsersTable;