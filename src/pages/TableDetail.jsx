
import { useParams } from "react-router-dom"
import TableData from "../components/TableData";

import useFiles from "../hooks/useFiles";


const TableDetail = (  ) => {

    const { name } = useParams();
    
    const { file } = useFiles(name);     

  return (

    <div className="container">
       <TableData file = { file } />
    </div>
    
  )
}

export default TableDetail
