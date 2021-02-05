import React, { Dispatch } from 'react';
import { useDispatch } from 'react-redux';
import { Rnd } from 'react-rnd';
import { removeArtboard } from '../../../redux/actions/artboardAction';
import { ArtboardActions, IArtboard } from '../../../redux/types/artboardTypes';
import './artboardStyle.css';

export const Artboard = ({ title, id }: IArtboard): JSX.Element => {
    const dispatch: Dispatch<ArtboardActions> = useDispatch();

    return (
        <Rnd
            className="artboard"
            default={{
                x: 0,
                y: 0,
                width: 200,
                height: 200,
            }}
        >
            <button onClick={() => dispatch(removeArtboard({ id }))}>Remove artboard</button>
            <p>{title}</p>
        </Rnd>
    );
};

// <Rnd
//   size={{ width: this.state.width,  height: this.state.height }}
//   position={{ x: this.state.x, y: this.state.y }}
//   onDragStop={(e, d) => { this.setState({ x: d.x, y: d.y }) }}
//   onResizeStop={(e, direction, ref, delta, position) => {
//     this.setState({
//       width: ref.style.width,
//       height: ref.style.height,
//       ...position,
//     });
//   }}
// ></Rnd>
