import React from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import { useForm} from '../../shared/hooks/form-hook';
import './PlaceForm.css';

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


const UpdatePlace = () => {
    const placeId = useParams().placeId

    

    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId)

    const [formState, inputHandler] = useForm({
        title: {
            value: identifiedPlace.title,
            isValid: true
        },
        description: {
            value: identifiedPlace.description,
            isValid: true
        }
    }, true);

    if (!identifiedPlace) {
        return (
            <div className="center">
                <h2>Could not finde place!</h2>
            </div>
        );
    }
    return (
        <form className="place-form">
            <Input
                id="title"
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid title."
                onInput={inputHandler}
                initialValue={formState.inputs.title.value}
                initialValid={formState.inputs.title.isValid}
            />
            <Input
                id="description"
                element="textarea"
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid description (min. 5 characters)."
                onInput={inputHandler}
                initialValue={formState.inputs.description.value}
                initialValid={formState.inputs.description.isValid}
            />
            <Button type="submit" disabled={!formState.isValid}>
                UPDATE PLACE
            </Button>
        </form>
    );
};

export default UpdatePlace;