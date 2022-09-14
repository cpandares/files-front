import { useEffect, useState } from "react";

import { getFile } from "../helper/getData";




const useFiles = (name) => {

    const [ file, setFile ] = useState([]);
    

    useEffect(()=>{
        getFile(name).then(resp => setFile(resp))
    },[name]); 

    return {
        file
    }
}

export default useFiles
