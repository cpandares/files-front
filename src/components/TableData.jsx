

const TableData = ({ file }) => {


  return (
    <table className="table table-striped table-bordered container mt-4 text-center " >
       
    <thead>
        <tr>
            <th>FileName</th>
            <th>Text</th>
            <th>Number</th>
            <th>Hex</th>
        </tr>
    </thead>

    <tbody>
        {
            file.ok &&   file?.lines?.length > 0  ?

            file?.lines?.map( item => (
                <tr key={ item.hex } >
                    <td aria-label="title">{ file.file }</td>
                    <td>{ item.text }</td>
                    <td>{ item.number }</td>
                    <td>{ item.hex }</td>
                </tr>
            ))
            :

            <tr>
                <td colSpan={4} aria-label="no-results">No Results</td>
            </tr>

        }
       

    </tbody>

</table>
   
  )


}

export default TableData
