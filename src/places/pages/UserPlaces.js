import React from 'react';
import { useParams } from 'react-router-dom';
import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Puente de la Mujer',
    description: 'One of the most famous sites in Puerto Madero',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Puente_de_la_mujer_Buenos_Aires_Argentina.JPG',
    address: 'Puente de la Mujer, C1113 CABA',
    location: {
      lat: -34.60620499667987,
      lng: -58.3649719608098
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Obelisco',
    description: 'One of the most famous monuments in Argentina',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Buenos_Aires_Obelisco.jpg',
    address: 'Av. 9 de Julio, C1043 CABA',
    location: {
      lat: -34.60355343140137,
      lng: -58.38153821614332
    },
    creator: 'u2'
  }
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const placesLoaded = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={placesLoaded} />;
};

export default UserPlaces;