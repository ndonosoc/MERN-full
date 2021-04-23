import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
            id: 'u1', 
            name: 'Ayrton Senna', 
            image: 'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_2103cf5ea8894b65a193bfddd1bca03f.jpg', 
            place: 3 
        }
    ]
    return <UsersList items={USERS} />;
};

export default Users;