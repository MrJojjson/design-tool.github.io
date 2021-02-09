import {useCallback, useState} from "../../_snowpack/pkg/react.js";
import {useQuery, gql, useMutation} from "../../_snowpack/pkg/@apollo/client.js";
const GET_PAGE = gql`
    query PageQuery {
        page {
            id
        }
    }
`;
export const useGetPage = () => {
  const {loading, error, data} = useQuery(GET_PAGE);
  const [page, setPage] = useState();
  const onGetPage = useCallback(() => {
    setPage(data);
  }, [data]);
  return {onGetPage, loading, error, page};
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
  const {loading, error, data} = useQuery(ALL_PAGES);
  const {pages} = data || {};
  return {loading, error, pages};
};
const ADD_PAGE = gql`
    mutation PageMutation($title: String!) {
        addPage(title: $title) {
            title
        }
    }
`;
export const useAddPage = () => {
  const [addPage2] = useMutation(ADD_PAGE, {
    update: (cache, {data: {addPage: addPage3}}) => {
      cache.modify({
        fields: {
          pages(existingPages = []) {
            return [...existingPages, addPage3];
          }
        }
      });
    }
  });
  const onAddPage = useCallback(({title}) => {
    addPage2({
      variables: {title}
    });
  }, []);
  return {onAddPage};
};
