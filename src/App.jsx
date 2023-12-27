import React, { useState } from "react";
import brand from "./assets/chat-gpt.png";
import bookmark from "./assets/bookmark.png";
import home from "./assets/home.png";
import plus from "./assets/plus.png";
import rocket from "./assets/rocket.png";
import send from "./assets/send.png";
import user1 from "./assets/user (1).png";
import user from "./assets/user.png";
import "./App.css";

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className={`App ${isSidebarOpen ? "sidebar-open" : ""}`}>
        <button className="menu-icon" onClick={toggleSidebar}>
          ☰
        </button>
        <div className="sideBar">
          <div className="upperSection">
            <div className="brand">
              <img src={brand} alt="Logo" />
              <p>ChatGPT</p>
            </div>
            <div className="newChat">
              <button>
                <img src={plus} />
                New Chat
              </button>
            </div>
            <div className="recent">
              <p> Recent Search</p>
              <button>What is Programmming</button>
              <button>What is Computer</button>
            </div>
          </div>
          <div className="lowerSection">
            <div className="home">
              <img src={home} alt="" />
              <p>Home</p>
            </div>
            <div className="home">
              <img src={bookmark} alt="" />
              <p>BookMark</p>
            </div>
            <div className="home">
              <img src={rocket} alt="" />
              <p>Rocket</p>
            </div>
            <div className="home">
              <img src={user1} alt="" />
              <p>Rehman Arain</p>
            </div>
          </div>
        </div>
        <div className="mainContant">
          <h2>ChatGPT 3.5</h2>
          <div className="scroll">
            <div className="question">
              <img src={user} alt="" />
              <p>what is programming language ?</p>
            </div>
            <div className="answer">
              <img src={brand} alt="" />
              <p>
                Ullam aliquam minus, sint necessitatibus impedit doloremque
                inventore labore temporibus perferendis ut, dolorum soluta
                quaerat assumenda minima enim ex possimus aliquid
                exercitationem? Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Ullam aliquam minus, sint necessitatibus
                impedit doloremque inventore labore temporibus perferendis ut,
                dolorum soluta quaerat assumenda
              </p>
            </div>
          </div>
          <div className="inputSend">
            <input
              type="text"
              placeholder="Enter your Question"
              // value={input}
              // onChange={(e) => {
              //   setInput(e.target.value);
              // }}
            />
            <img src={send} alt="" />
          </div>
          <div className="paragraph">
            <p>
              ChatGPT can make mistakes. Consider checking important
              information.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
