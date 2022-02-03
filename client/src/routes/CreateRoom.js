import React from "react";
import { v1 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

const CreateRoom = (props) => {
    let navigate = useNavigate();
  function create () {
    const id = uuid();
    navigate(`/room/${id}`);
  };

  return <button onClick={create}>Create Room</button>;
};

export default CreateRoom;
