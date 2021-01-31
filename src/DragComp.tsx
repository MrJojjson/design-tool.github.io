import React, { useState } from 'react';

type TInitPos = {
    x: number;
    y: number;
};

interface IDragComp {
    initPos?: TInitPos;
}

export const DragComp = ({ initPos = { x: 0, y: 0 } }: IDragComp): JSX.Element => {
    const [pos, setPos] = useState<TInitPos>(initPos);
    const [dragging, setDragging] = useState(false);

    const onDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
        setDragging(false);
    };

    const onDrag = ({ pageX: x, pageY: y, button }: React.DragEvent<HTMLDivElement>) => {
        if (button !== 0 || !x || !y) return;
        setDragging(true);
        setPos({ x, y });
    };

    return (
        <div
            draggable="true"
            onDragEnd={(event) => onDragEnd(event)}
            onDrag={(event) => onDrag(event)}
            className="App"
            style={{ position: 'absolute', left: `${pos.x}px`, top: `${pos.y}px` }}
        >
            Comp
        </div>
    );
};
