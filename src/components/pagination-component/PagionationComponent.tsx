import {useSearchParams } from "react-router-dom"


export const PaginationComponent = () =>{
    
    const [searchParams, setSearchParams] = useSearchParams({page: '1'});

    return(
        <div>
            <button onClick={() =>{
                    let currentPage = Number(searchParams.get('page') || '1')
               setSearchParams({page: (++currentPage).toString()})
            }}>Next</button>
            <button onClick={() =>{
                    let currentPage = Number(searchParams.get('page') || '1')
                 setSearchParams({page: (--currentPage).toString()})
            }}>Previous</button>
        </div>
    )
}