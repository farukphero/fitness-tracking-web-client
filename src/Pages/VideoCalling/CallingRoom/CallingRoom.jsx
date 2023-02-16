import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const CallingRoom = () => {
  const { roomid } = useParams();
  const myMeeting = async (element) => {
    const appID = 1760490804;
    const serverSecret = "3805d80f063497721e91bbbd3018ad46";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomid,
      Date.now().toString(),
      "euhan sarkar"
    );
    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: `Copy Link`,
          url: `http://localhost:3000/room/${roomid}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      showScreenSharingButton: true,
    });
  };

  return (
    <div style={{ width: "100vh" }}>
      <div ref={myMeeting} />
    </div>
  );
};

export default CallingRoom;
