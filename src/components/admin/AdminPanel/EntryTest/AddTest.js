import React from "react";
import axios from "axios";

export default function AddTest() {
  const [inputList, setinputList] = React.useState([
    { question: "", A: "", B: "", C: "", D: "", correctOption: "" },
  ]);

  const handleinputchange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setinputList(list);
    console.log(inputList)
  };

  const handleremove = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setinputList(list);
  };

  const handleaddclick = () => {
    setinputList([
      ...inputList,
      { question: "", A: "", B: "", C: "", D: "", correctOption: "" },
    ]);
  };

  const [university, setUniversity] = React.useState();

  const addTest = async(e) => {
      e.preventDefault();
      try {
          const res = await axios.post("/test/addTest", {
            university,
            questions: inputList
          });
          alert(res.data)
      } catch (error) {

      }
  }
  return (
    <div className="container mt-5">
      <p className="text-center fw-bold" style={{ fontSize: 30 }}>
        Add Test
      </p>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Enter University
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Comsats University"
          onChange={(e) => {
            setUniversity(e.target.value);
          }}
        />
      </div>
      {inputList.map((x, i) => {
        return (
          <div className="row mb-3">
            <div class="form-group col-md-12">
              <label>Enter Question</label>
              <input
                type="text"
                name="question"
                class="form-control"
                placeholder="Enter Question"
                onChange={(e) => handleinputchange(e, i)}
              />
            </div>
            <div class="form-group col-md-3">
              <label>Enter Option A</label>
              <input
                type="text"
                name="A"
                class="form-control"
                placeholder="Enter Option A"
                onChange={(e) => handleinputchange(e, i)}
              />
            </div>
            <div class="form-group col-md-3">
              <label>Enter Option B</label>
              <input
                type="text"
                name="B"
                class="form-control"
                placeholder="Enter Option B"
                onChange={(e) => handleinputchange(e, i)}
              />
            </div>
            <div class="form-group col-md-3">
              <label>Enter Option C</label>
              <input
                type="text"
                name="C"
                class="form-control"
                placeholder="Enter Option C"
                onChange={(e) => handleinputchange(e, i)}
              />
            </div>
            <div class="form-group col-md-3">
              <label>Enter Option D</label>
              <input
                type="text"
                name="D"
                class="form-control"
                placeholder="Enter Option D"
                onChange={(e) => handleinputchange(e, i)}
              />
            </div>
            <div class="form-group col-md-12">
              <label>Enter Correct Option</label>
              <input
                type="text"
                name="correctOption"
                class="form-control"
                placeholder="Enter Correct Option"
                onChange={(e) => handleinputchange(e, i)}
              />
            </div>
            <div class="form-group col-md-2 mt-4">
              {inputList.length !== 1 && (
                <button
                  className="btn btn-danger mx-1"
                  onClick={() => handleremove(i)}
                >
                  Remove
                </button>
              )}
              {inputList.length - 1 === i && (
                <button className="btn btn-success" style={{ marginTop: 20 }} onClick={handleaddclick}>
                  Add More
                </button>
              )}
            </div>
          </div>
        );
      })}
      <button style={{ marginTop: 30, width: '100%' }} className="btn btn-success" onClick={addTest}>
                  Add Test
                </button>
    </div>
  );
}
