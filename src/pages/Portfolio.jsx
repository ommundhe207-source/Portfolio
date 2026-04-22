import React, { useState, useEffect } from "react";
import "./Portfolio.css";

function Portfolio() {
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem("projects");
    return saved ? JSON.parse(saved) : [];
  });

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImg(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const addProject = () => {
    if (!title || !desc || !img) {
      alert("Fill all fields");
      return;
    }

    const newProject = { title, desc, img };
    setProjects([...projects, newProject]);

    setTitle("");
    setDesc("");
    setImg("");
    setIsOpen(false);
  };

  const deleteProject = (index) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  return (
    <section className="projects">
      <h2 className="section-title">My Projects</h2>

      {/* BUTTON */}
      <button className="open-btn" onClick={() => setIsOpen(true)}>
        + Add Project
      </button>

      {/* SIDEBAR */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-content">
          <h2>Add Project</h2>

          <input
            type="text"
            placeholder="Project Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label className="file-label">📁Choose Image
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          </label>

          {img && (
            <div className="image-preview">
              <img src={img} alt="preview" />
            </div>
          )}

          <input
            type="text"
            placeholder="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />

          <button onClick={addProject}>Add Project</button>

          <button className="close-btn" onClick={() => setIsOpen(false)}>
            ✖ Close
          </button>
        </div>
      </div>

      {/* PROJECTS */}
      <div className="project-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.desc}</p>

            <button onClick={() => deleteProject(index)} className="delete-btn">
              Delete
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
