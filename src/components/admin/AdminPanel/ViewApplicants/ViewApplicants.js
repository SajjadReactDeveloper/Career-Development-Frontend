import React from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function ViewApplicants() {
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        getData();
    }, [])

    const getData = async() => {
        try {
            const res = await axios.get("/file/viewApplicants");
            console.log(res)
            setData(res.data);
        } catch (error) {
            
        }
    }

    const history = useNavigate();
    const handleClick = (data) => {
      history("/applicantDetails",{state: data});
    };
  return (
    <div>
      <p style={{ marginTop: 30, textAlign: "center", fontSize: 30 }}>
        All Applicants
      </p>
      {data.map((data, index) => (
        <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Applicant Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ cursor: 'pointer' }} onClick={() => {
              handleClick(data);
            }}>
            <th scope="row">{index + 1}</th>
            <td >{data.name}</td>
            <td >{data.email}</td>
          </tr>
        </tbody>
      </table>
      ))}
    </div>
  );
}
