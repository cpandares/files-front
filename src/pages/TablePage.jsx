import { Link } from "react-router-dom"


const TablePage = ({  data }) => {


  return (
    <table className="table table-striped table-bordered container mt-4 ">

        <thead>
            <tr>
                <th>FileName</th>
               
            </tr>
        </thead>

        <tbody>
          {
            data?.map( item =>(
                <tr key={item}>
                    <td>
                        <Link to={ `/${item}` } >
                            { item }
                        </Link>
                    </td>
                </tr>
            ) )
          }
        </tbody>
      
    </table>
  )
}

export default TablePage
