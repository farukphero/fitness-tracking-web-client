import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const CommunityGroup = () => {
  const { user, userInfo } = useContext(AuthContext);

  const [pFrnd, setPfrnd] = useState("");
  const [currentFrndId, setCurrentFrndId] = useState("");
  const [usersWithoutPresent, setUsersWithoutPresent] = useState([]);
  useEffect(() => {
    fetch("https://fitness-tracking-web-server.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        const result = data.filter(
          (users) => user?.email !== users?.email
          // && !userInfo?.accepted === true
        );
        // setLoading(false);
        setUsersWithoutPresent(result);
      });
  }, [user?.email]);
  console.log(usersWithoutPresent);
  const chatfrnd = (pfrnd, id) => {
    setPfrnd(pfrnd);
    setCurrentFrndId(id);
  };
  const sendMsg = (e) => {
    e.preventDefault();
    const msg = e.target.msg.value;
    const message = {
      msg,
      currentUserId: userInfo?._id,
      currentFrndId,
    };

    fetch("https://fitness-tracking-web-server.vercel.app/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(message),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    console.log(message);

    e.target.reset();
  };

  const {
    data: messages = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["messages.", user?.email],
    queryFn: () =>
      fetch(
        `https://fitness-tracking-web-server.vercel.app/getMessages/${userInfo?._id}/${currentFrndId}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          return data;
        }),
  });

  return (
    <div>
      {/* hello */}
      <div className="flex">
        <div className="w-1/2 border border-2 mr-5 px-4">
          {usersWithoutPresent.map((frnd) => (
            <div>
              <p onClick={() => chatfrnd(frnd.firstName, frnd._id)}>
                {frnd.firstName}
              </p>
            </div>
          ))}
        </div>
        <div className="w-1/2 border border-2 px-5">
          <p>{pFrnd}</p>
          {messages.map((ms) => (
            <div>
              <p className="font-bold text-red-900">{ms.msg}</p>
            </div>
          ))}
          <form onSubmit={sendMsg}>
            <input
              className="bg-black"
              name="msg"
              type="text"
              placeholder="Message"
            />
            <button type="submit">send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommunityGroup;
