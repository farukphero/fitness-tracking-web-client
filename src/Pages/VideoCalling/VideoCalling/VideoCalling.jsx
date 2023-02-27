import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";


const VideoCalling = () => {
  const [value, setValue] = useState();
  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
    navigate(`/video/room/${value}`);
  }, [navigate, value]);

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          placeholder="enter your meeting"
        />
        <button onClick={handleJoinRoom}>join now</button>
      </div>
    </div>
  );
};

export default VideoCalling;
