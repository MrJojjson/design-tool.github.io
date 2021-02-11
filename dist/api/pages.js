import{useCallback as e,useState as t}from"../../_snowpack/pkg/react.js";import{useQuery as a,gql as o,useMutation as r}from"../../_snowpack/pkg/@apollo/client.js";const n=o`
    query PageQuery {
        page {
            id
        }
    }
`;export const useGetPage=()=>{const{loading:o,error:r,data:g}=a(n),[s,i]=t();return{onGetPage:e((()=>{i(g)}),[g]),loading:o,error:r,page:s}};const g=o`
    query PageQuery {
        pages {
            title
            id
        }
    }
`;export const useGetPages=()=>{const{loading:e,error:t,data:o}=a(g),{pages:r}=o||{};return{loading:e,error:t,pages:r}};const s=o`
    mutation PageMutation($title: String!) {
        addPage(title: $title) {
            title
        }
    }
`;export const useAddPage=()=>{const[t]=r(s,{update:(e,{data:{addPage:t}})=>{e.modify({fields:{pages:(e=[])=>[...e,t]}})}});return{onAddPage:e((({title:e})=>{t({variables:{title:e}})}),[])}};