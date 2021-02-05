import { addPage } from '../redux/actions/pageAction';
import { useDispatch } from 'react-redux';
import { useCallback, useState, Dispatch } from 'react';
import { IPage, PageActions } from '../redux/types/pageTypes';
import { useQuery, gql, useMutation } from '@apollo/client';

const GET_PAGE = gql`
    query PageQuery {
        page {
            id
        }
    }
`;

export const useGetPage = () => {
    const { loading, error, data } = useQuery(GET_PAGE);
    const [page, setPage] = useState();
    const onGetPage = useCallback(() => {
        setPage(data);
    }, [data]);

    return { onGetPage, loading, error, page };
};

const ALL_PAGES = gql`
    query PageQuery {
        pages {
            title
            id
        }
    }
`;

export const useGetPages = () => {
    const { loading, error, data } = useQuery(ALL_PAGES);
    const { pages } = data || {};
    return { loading, error, pages };
};

const ADD_PAGE = gql`
    mutation PageMutation($title: String!) {
        addPage(title: $title) {
            title
        }
    }
`;

export const useAddPage = () => {
    const [addPage] = useMutation(ADD_PAGE, {
        update: (cache, { data: { addPage } }) => {
            cache.modify({
                fields: {
                    pages(existingPages = []) {
                        return [...existingPages, addPage];
                    },
                },
            });
        },
    });

    const onAddPage = useCallback(({ title }: Pick<IPage, 'title'>) => {
        addPage({
            variables: { title },
        });
    }, []);

    return { onAddPage };
};
