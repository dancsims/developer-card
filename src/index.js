import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="./profile.jpeg" className="avatar" alt="profile"></img>;
}

function Intro() {
  return (
    <div>
      <h1>Daniel Sims</h1>
      <p>
        Database developer and aspiring full-stack web developer. When not
        coding, I enjoy playing board games, table top games (wargames,
        adventure, etc.), trading card games, and video games.{" "}
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="✌️" color="lightblue" />
      <Skill skill="Angular" emoji="✌️" color="orangered" />
      <Skill skill="HTML+CSS" emoji="✌️" color="red" />
      <Skill skill="JavaScript" emoji="✌️" color="yellow" />
      <Skill skill="TypeScript" emoji="✌️" color="green" />
      <Skill skill="Next.JS" emoji="✌️" color="orange" />
      <Skill skill="MSSQL" emoji="✌️" color="purple" />
      <Skill skill="Git + GitHub" emoji="✌️" color="yellowgreen" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
