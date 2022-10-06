import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function UploadAttachments() {
    const [cv, setCv] = React.useState();
    const [matric, setMatric] = React.useState();
    const [fsc, setFsc] = React.useState();
    const [disabled, setDisabled] = React.useState(false);

     const auth = useSelector((state) => state.authReducer);
      const { user, isLogged } = auth;

    const history = useNavigate()

    const sendFiles = async(e) => {
      e.preventDefault();
      try {
        setDisabled(true)
        let formData = new FormData();
        formData.append("file", cv);
        formData.append("matric", matric);
        formData.append("fsc", fsc);
        const res = await axios.post("/file/uploadFsc", formData, {
          headers: {
            "content-type": "multipart/form-data",
          },
        });
        const resp = await axios.post("/file/update", {id: res.data._id, name: user.name, email: user.email} );
        setDisabled(false);
        alert(resp.data);
        history('/');
      } catch (error) {
        
      }
    }
  return (
    <div className="container mt-5">
      <p>Upload Attachments</p>
      <form action="" onSubmit={sendFiles}>
        <div class="mb-3">
          <label for="formFile" class="form-label">
            Upload CV
          </label>
          <input
            class="form-control"
            type="file"
            id="formFile"
            name="file"
            onChange={(e) => {
              setCv(e.target.files[0]);
            }}
          />
        </div>
        <div class="mb-3">
          <label for="formFile" class="form-label">
            Upload Fsc Transcript
          </label>
          <input
            class="form-control"
            type="file"
            id="formFile"
            onChange={(e) => {
              setFsc(e.target.files[0]);
            }}
          />
        </div>
        <div class="mb-3">
          <label for="formFile" class="form-label">
            Upload Matric Transcript
          </label>
          <input
            class="form-control"
            type="file"
            id="formFile"
            onChange={(e) => {
              setMatric(e.target.files[0]);
            }}
          />
        </div>
        <button
          className="btn btn-success"
          type="submit"
          style={{ float: "right" }}
          disabled = {disabled}
        >
          Send
        </button>
      </form>
    </div>
  );
}
