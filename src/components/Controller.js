import { useState } from "react";
import shortid from "shortid";

const initialState = {
  name: "",
  timeZone: "",
};

const Controller = ({ addNewWatches }) => {
  const [watch, setWatch] = useState(initialState);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setWatch((prevState) => ({ ...prevState, [name]: value }));
  };

  const resetForm = () => {
    setWatch({
      name: "",
      timeZone: "",
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const payload = {
      ...watch,
      id: shortid.generate(),
    };
    addNewWatches(payload);
    resetForm();
  };

  return (
    <form className="row" onSubmit={onSubmitHandler} name="addWatch">
      <div className="col-md-4">
        <label htmlFor="name" className="form-label" style={{ color: "white" }}>
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="watchesName"
          name="name"
          value={watch.name}
          onChange={onChangeHandler}
          placeholder="Paris"
          required
        />
      </div>
      <div className="col-md-4">
        <label
          htmlFor="timeZone"
          className="form-label"
          style={{ color: "white" }}
        >
          Time Zone
        </label>
        <input
          type="text"
          className="form-control"
          id="timeZone"
          name="timeZone"
          value={watch.timeZone}
          onChange={onChangeHandler}
          placeholder="-2"
          required
        />
      </div>
      <div className="col-md-4 align-self-end">
        <button className="btn btn-info" type="submit">
          Add Watches
        </button>
      </div>
    </form>
  );
};

export default Controller;
