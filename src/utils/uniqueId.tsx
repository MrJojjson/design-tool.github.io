let lastId = 0;

interface IUniqueId {
    prefix?: string;
}

export const uniqueId = ({ prefix = 'id' }: IUniqueId): string => {
    lastId += 1;
    return `${prefix}${lastId}`;
};
