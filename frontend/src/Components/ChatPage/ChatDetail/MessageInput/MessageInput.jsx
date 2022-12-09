import { getUserId } from "../../../../Util/LocalStorage";
import { useChatMessageInput } from "./MessageInput.hook";

export const MessageInput = ({ handleSendMessage }) => {
  const userId = getUserId();
  const { message, handleChangeMessage } = useChatMessageInput();
  return (
    <div id="chat_detail_current_chat_div">
      <input
        type="text"
        id="chat_detail_current_chat"
        value={message}
        onChange={handleChangeMessage}
      />
      <button
        id="chat_send_button"
        onClick={handleSendMessage(userId, message)}
      >
        <img src="../assets/img/sendbuttonimg.png" alt="chat_send_image" />
      </button>
    </div>
  );
};
