import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import profile from "./profile.jpeg";

const skills = [
  { skill: "React", level: "intermediate", color: "lightblue" },
  { skill: "Angular", level: "intermediate", color: "orangered" },
  { skill: "HTML+CSS", level: "intermediate", color: "red" },
  { skill: "JavaScript", level: "intermediate", color: "yellow" },
  { skill: "Next.JS", level: "intermediate", color: "orange" },
  { skill: "MSSQL", level: "advanced", color: "purple" },
  { skill: "Git + GitHub", level: "intermediate", color: "yellowgreen" },
  { skill: "Bicep + ARM", level: "intermediate", color: "lightgreen" },
];

const emojis = {
  beginner: "👶",
  intermediate: "👍",
  advanced: "💪",
};

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
  return <img src={profile} className="avatar" alt="profile"></img>;
}

function Intro() {
  return (
    <div>
      <h1>Daniel Sims</h1>
      <p>
        Senior Software Engineer with a strong background in database
        development. When not coding, I enjoy playing board games, table top
        games (wargames, adventure, etc.), trading card games, and video
        games.{" "}
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill, index) => (
        <Skill
          key={index}
          skill={skill.skill}
          color={skill.color}
          emoji={emojis[skill.level]}
        />
      ))}
    </div>
  );
}

function Skill({ skill, color, emoji }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
