// import { PrettyChatWindow } from "react-chat-engine-pretty";
import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    "9ab22e81-4f44-4d43-9cd3-a344986c6ca4",
    props.user.username,
    props.user.username
  );
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: "100%" }} />
    </div>
  );

  //   return (
  //     <div style={{ height: "100%", width: "100%" }}>
  //       <PrettyChatWindow
  //         projectID="9ab22e81-4f44-4d43-9cd3-a344986c6ca4"
  //         username={props.user.username}
  //         secret={props.user.username}
  //         style={{ height: "100%" }}
  //       />
  //     </div>
  //   );
};
export default ChatsPage;
