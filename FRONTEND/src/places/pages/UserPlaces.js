import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Nurburgrin',
        description: 'Legendary Track!',
        imageUrl: 'https://cdn-wp.thesportsrush.com/2020/07/Untitled-design-68.jpg',
        address: '53520 Nürburg, Alemania',
        location: {
            lat: 50.3552569,
            lng: 6.9355489
        },
        creator: 'u1' 
    },
    {
        id: 'p2',
        title: 'Imola',
        description: 'Amazing track!',
        imageUrl: 'https://cdn-wp.thesportsrush.com/2020/09/Untitled-design-2-2.jpg',
        address: 'Piazza Ayrton Senna da Silva, 1, 40026 Imola BO, Italia',
        location: {
            lat: 44.3440776,
            lng: 11.7121622
        },
        creator: 'u2' 
    },
];

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
    return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces