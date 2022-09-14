
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../hooks/useForm";

import useFiles from "../hooks/useFiles";
import TableData from "../components/TableData";


const SearchPage = () => {


  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const { file } = useFiles(q);  

  const showSearch = q.length === 0;
  

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`);
  };

  return (
    <div className="row container mt-5">

      <div className="col-5">

        <form 
          onSubmit={handleSubmit}
          aria-label="form"
          >
          <input
            type="text"
            className="form-control"
            placeholder="Example: test1.csv"
            name="searchText"
            value={searchText}
            onChange={onInputChange}
          />

          <button className="mt-2 btn btn-outline-primary">Search</button>
        </form>
      </div>

      <div className="col-7">
        <h4>Results</h4>
        <hr />

        <div
          className="alert alert-primary"
          aria-label="alert-primary"
          style={{ display: showSearch ? "" : "none" }}
        >
          Search a File
        </div>      
         

        <TableData file = { file } />
       
      </div>
    </div>
  );
};

export default SearchPage;
