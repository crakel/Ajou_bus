import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserId } from "../../../Util/LocalStorage";
import ClientSocket from "../../../Util/Socket";

export const useJoinChat = ({ handleAddMessage }) => {
  const naivgate = useNavigate();
  const handleExitChat = () => {
    ClientSocket.socket.emit("exit");
    naivgate("/");
  };
  useEffect(() => {
    const myId = getUserId();
    if (!myId) return;
    const socket = new ClientSocket(myId);
    socket.socket.on("onMessage", handleAddMessage);

    return () => {
      ClientSocket.instance = null;
      socket.socket.off("onMessage", handleAddMessage);
      socket.socket.disconnect();
    };
  }, []);

  return handleExitChat;
};

export const useChatMessage = () => {
  const [messageList, setMessageList] = useState([]);

  const handleAddMessage = (message) =>
    setMessageList((prev) => [...prev, message]);

  const handleSendMessage = (id, message) => () => {
    ClientSocket.socket.emit("sendMessage", { id, message });
  };
  return { messageList, handleAddMessage, handleSendMessage };
};
