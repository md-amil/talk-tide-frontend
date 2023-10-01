import { Button, Input, List, Skeleton } from "antd";
import axios from "axios";
import { useState } from "react";
import api from "../api";

const DUMMY_DATA = [
  {
    title: "hi",
    user: "me",
  },
  {
    title: "hello",
    user: "me",
  },
  {
    title: "how are you",
    user: "other",
  },
  {
    title: "i m fine",
    user: "me",
  },
  {
    title: "what about you",
    user: "other",
  },
];

export default function () {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const getMessages = async () => {
    const { data } = await api.get("/messages");
    console.log({ data });
    setMessages(data);
  };
  useState(() => {
    getMessages();
  }, []);

  const handleChange = (input) => {
    setInputMessage(input.target.value);
  };
  const handleSend = () => {
    const newMessage = { text: inputMessage, user: "other" };
    if(inputMessage=="") return 
    api.post("/messages", {
      text: inputMessage,
      conversationId: "6506f46365d3808696c6ef0a",
      userId:"6516f5ae0f7fc00ad2f372ae"
    });
    setMessages([...messages, newMessage]);
    setInputMessage("");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        padding: "0 200px",
        backgroundColor: "#f3f2f2",
      }}
    >
      <List
        itemLayout="horizontal"
        dataSource={messages}
        renderItem={(item) => (
          <div
            style={{
              display: "flex",
              justifyContent: item.user === "me" ? "flex-end" : "flex-start",
            }}
          >
            {item.user == "me" ? (
              <List.Item style={{ margin: 0 }}>
                <div
                  style={{
                    backgroundColor: "#279ddd",
                    color: "white",
                    padding: "5px 20px",
                    margin: 0,
                    borderRadius: 10,
                  }}
                >
                  {item.text}
                </div>
              </List.Item>
            ) : (
              <List.Item>
                <div
                  style={{
                    backgroundColor: "#fff",
                    color: "grayText",
                    padding: "5px 20px",
                    borderRadius: 10,
                  }}
                >
                  {item.text}
                </div>
              </List.Item>
            )}
          </div>
        )}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "auto",
          marginBottom: 20,
        }}
      >
        <Input
          value={inputMessage}
          onChange={handleChange}
          size="large"
          placeholder="Enter your message"
          style={{ flex: 1 }}
        />
        <Button
          onClick={handleSend}
          style={{ marginLeft: 10, alignSelf: "center" }}
          title="Send"
        >
          Send
        </Button>
      </div>
    </div>
  );
}
