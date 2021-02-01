import React, { Dispatch } from 'react';
import { useDispatch } from 'react-redux';
import { removeArtboard } from '../../../redux/actions/artboardAction';
import { ArtboardActions, IArtboard } from '../../../redux/types/artboardTypes';
import './artboardStyle.css';

export const Artboard = ({ title, id }: IArtboard): JSX.Element => {
    const dispatch: Dispatch<ArtboardActions> = useDispatch();

    return (
        <div className="artboard">
            <button onClick={() => dispatch(removeArtboard({ id }))}>Remove artboard</button>

            <p>{title}</p>
        </div>
    );
};
