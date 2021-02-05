import { useCallback, useState } from 'react';

type DragPos = {
    x: number;
    y: number;
};

interface IDragReturn {
    pos: DragPos;
    dragging: boolean;
    onDrag: (event: React.DragEvent<HTMLDivElement>) => void;
    onDragEnd: () => void;
}
const initPos = { x: 0, y: 0 };

export const useDrag = (): IDragReturn => {
    const [pos, setPos] = useState<DragPos>(initPos);
    const [dragging, setDragging] = useState(false);

    const onDrag = useCallback(({ clientX: x, clientY: y, button, ...rest }: React.DragEvent<HTMLDivElement>) => {
        if (button !== 0 || !x || !y) return;
        setDragging(true);
        setPos({ x, y });
    }, []);

    const onDragEnd = useCallback(() => {
        setDragging(false);
    }, []);

    return { pos, dragging, onDrag, onDragEnd };
};
