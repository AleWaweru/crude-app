import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../Redux/UserReducer';

const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existUser = users.find((user) => user.id == id);
  const { name, email } = existUser;
  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(
      updateUser({
        id,
        name: uname,
        email: uemail,
      }),
    );
    navigate('/');
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <form onSubmit={handleUpdate}>
          <h3>UPDATE USER</h3>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter name"
              value={uname}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              value={uemail}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />

          <button className="btn btn-info">UPDATE</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
