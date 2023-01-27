import { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(()=>{
    document.title= `${title} - FITLESSIAN.`
    },[title])
};

export default useTitle;