import{useCallback as r,useState as d}from"../../_snowpack/pkg/react.js";import{useQuery as g,gql as n,useMutation as u}from"../../_snowpack/pkg/@apollo/client.js";const i=n`
    query PageQuery {
        page {
            id
        }
    }
`;export const useGetPage=()=>{const{loading:t,error:o,data:e}=g(i),[a,s]=d();return{onGetPage:r(()=>{s(e)},[e]),loading:t,error:o,page:a}};const c=n`
    query PageQuery {
        pages {
            title
            id
        }
    }
`;export const useGetPages=()=>{const{loading:t,error:o,data:e}=g(c),{pages:a}=e||{};return{loading:t,error:o,pages:a}};const P=n`
    mutation PageMutation($title: String!) {
        addPage(title: $title) {
            title
        }
    }
`;export const useAddPage=()=>{const[t]=u(P,{update:(e,{data:{addPage:a}})=>{e.modify({fields:{pages(s=[]){return[...s,a]}}})}});return{onAddPage:r(({title:e})=>{t({variables:{title:e}})},[])}};
