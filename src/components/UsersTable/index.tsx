import React, { FC, useState} from 'react'

import { Wrapper } from "./style"

type UsersTableProps = {

}
 const UsersTable = () => {
    const [activeItem, activeSetter] = useState(0)
    return (
        <Wrapper>

            <div className="web-table">
                <div className="table-header">
                    <div className="header-item">
                       Name
                    </div>
                    <div className="header-item">
                   Email
                    </div>
                    <div className="header-item">
                   Address
                    </div>
                    <div className="header-item">
                   region
                    </div>

                    <div className="header-item">
                  Country
                    </div>
                </div>

                        <div className='table-row'>
                            <div className="body-item">
                               John Doe
                            </div>
                            <div className="body-item">
                           john@gmail.com
                            </div>
                            <div className="body-item">
                           123 Main St
                            </div>
                            <div className="body-item">
                            Anytown
                            </div>
                            <div className="body-item">
                            USA
                            </div>
                        </div>
                        <div className='table-row'>
                            <div className="body-item">
                               John Doe
                            </div>
                            <div className="body-item">
                           john@gmail.com
                            </div>
                            <div className="body-item">
                           123 Main St
                            </div>
                            <div className="body-item">
                            Anytown
                            </div>
                            <div className="body-item">
                            USA
                            </div>
                        </div>
            </div>

        </Wrapper>
    )
 }


export default UsersTable;