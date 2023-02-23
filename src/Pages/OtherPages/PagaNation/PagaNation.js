import React from 'react';

const PagaNation = ({ totalpost, postperPage, setcurrentPage }) => {
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalpost / postperPage); i++) {
        pages.push(i)
    }
    console.log(totalpost, postperPage)
    return (
        <div>
            {
                pages.map((page, index) => {
                    return <button
                        className='btn btn-active ml-3' key={index}
                        onClick={() => setcurrentPage(page)} >
                        {page}
                    </button>
                })
            }
        </div>
    );
};

export default PagaNation;