import React from 'react'
import {CollectionBox, Header, Avatar, UserInfo} from '../styles/ProfileStyles'

function Profile(props){
    return (
        <div>
            <Header>
                <Avatar/>
                <UserInfo>
                    <h1>{/*Name of person here*/}</h1>
                    <button>Edit Profile</button>
                </UserInfo>
            </Header>
            <h2>Collections</h2>
            <CollectionBox>
                {/*ImageCollection here*/}
            </CollectionBox>
        </div>
    )
}

export default Profile
