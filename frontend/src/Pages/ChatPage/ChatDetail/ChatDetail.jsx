import {
  Header,
  MessageInput,
  Message,
} from "../../../Components/ChatPage/ChatDetail/.";
import "./ChatDetail.css";
import { useChatMessage, useJoinChat } from "./ChatDetail.hook";

export const ChatDetail = () => {
  const { messageList, handleAddMessage, handleSendMessage } = useChatMessage();
  const handleExitChat = useJoinChat({ handleAddMessage });
  return (
    <div>
      <Header />
      <div id="chat_detail_outer_div">
        <div id="chat_detail_title_div">
          <p id="chat_detail_title">
            수원역까지 같이 탑승하실 분 구합니다 [3/4]
          </p>
        </div>
        <div id="chat_detail_room_div">
          <div id="chat_detail_room_box">
            {messageList.map((message) => (
              <Message
                id={message.id}
                name={message.name}
                message={message.message}
              />
            ))}
            <Message name="익명1" message="hihi" />
            <MessageInput handleSendMessage={handleSendMessage} />
          </div>
        </div>
        <button id="chat_detail_button" onClick={handleExitChat}>
          나가기
        </button>
      </div>
    </div>
  );
};
