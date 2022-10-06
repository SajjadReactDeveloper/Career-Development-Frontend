import React from 'react'
import Sidebar from '../../../user/Navbar/Sidebar'
import { useNavigate } from 'react-router-dom'

export default function ViewTestMainScreen() {
    const history = useNavigate();
    const [university, setUniversity] = React.useState();

    const submit = (e) => {
        e.preventDefault();
        try {
            history("/viewTests", {state: university});
        } catch (error) {
            
        }
    }
  return (
    <div>
      <div className="row p-0 m-0">
        <div className="col-3 p-0 m-0" style={{ height: "100vh" }}>
          <Sidebar />
        </div>
        <div className="col-9 mt-5">
          <form action="" onSubmit={submit}>
            <input
              placeholder="Search University"
              type="text"
              className="form-control"
              onChange={(e) => {
                setUniversity(e.target.value);
              }}
            />
            <button className="btn btn-success mt-3" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
