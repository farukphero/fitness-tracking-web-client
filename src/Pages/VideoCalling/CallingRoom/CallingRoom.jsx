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
          url: `https://fitlessian.web.app/video/room/${roomid}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      showScreenSharingButton: true,
    });
  };

  return (
    <div
      className="lg:w-[1450px] lg:h-[760px] p-1.5 mx-auto scale-50 lg:scale-100"
      ref={myMeeting}
    ></div>
  );
};

export default CallingRoom;
