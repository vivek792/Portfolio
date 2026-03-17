import React from "react";
import "./Portfolio.css";
import { Linkedin, Mail, Cpu, Code, Database, Layers } from "lucide-react";
import ProfilePhoto from "./Photo.jpg";
import Resume from "./Resume.pdf";

const Portfolio = () => {

  const projects = [
    {
      title: "Ai Insight",
      desc: "Architectured and developed AI-powered chatbot for network engineers integrating AirLM with RAG and Chroma DB for context-aware troubleshooting.",
      tech: ["FastAPI", "ReactJS", "ChromaDB", "RAG", "AirLM", "A2A Agents", "VectorDB", "OracleDB"],
      associated: "Airtel"
    },
    {
      title: "AirLM",
      desc: "Architectured and developed Custom LLM built from scratch on Transformer architecture with reasoning modules and RLHF-inspired learning.",
      tech: ["TensorFlow", "Keras", "Transformers Architecture", "Python", "AI Algorithm's", "VectorDB", "OracleDB"],
      associated: "Airtel"
    },
    {
      title: "Unified Data Inventory",
      desc: "Architectured and developed Ticketing analytics platform using Agentic AI for deep-dive trend reporting across multiple domains.",
      tech: ["Agentic AI", "ReactJS", "Data Analytics", "FASTAPI", "LLM", "MCP", "OracleDB"],
      associated: "Airtel"
    },
    {
      title: "BRAS TT Dashboard",
      desc: "Architectured and developed Full-stack dashboard with LSTM models for real-time prediction of SLA breaches and ticket aging.",
      tech: ["ReactJS", "FastAPI", "LSTM", "Predictive AI", "Deep Learning", "Machine Learning", "oracleDB", "VectorDB"],
      associated: "Airtel"
    },
    {
      title: "PixelEngine",
      desc: "Architectured and developed Custom LLM built from scratch on U-NET architecture with reasoning modules for Image Generation.",
      tech: ["TensorFlow", "Keras", "U-NET Architecture", "Python", "AI Algorithm's", "VectorDB"],
      associated: "Airtel"
    },
     {
      title: "NetVision",
      desc: "Architectured and developed Full-stack dashboard with LSTM models for real-time prediction of Alarms and Alarms Occurence , Predicted Anomalies Detection on Events occurence, Insights generation via LLM Model via MCP Server using AI Agents.",
       tech: ["TensorFlow", "Keras", "LLM", "Python", "Reactjs", "FASTAPI", "LSTM", "Predictive AI", "AgenticAI", "MCP", "Deep Learning", "Machine Learning", "OracleDB"],
      associated: "Airtel"
    },
     {
       title: "MOP.ai",
      desc: "Architectured and developed Full-stack application for MOP generation using the standard framework for each Vendor specific.While generation of MOP Login into the network get the details fetch the required details from the document and then generate the MOP. Once the MOP Created then user will be able to execute it in Network after validation. LLM model training will be present for all of the generated MOP.",
       tech: ["TensorFlow", "Keras", "LLM", "Python", "Reactjs", "FASTAPI", "OracleDB"],
      associated: "Airtel"
    },
     {
      title: "NOCBeats",
      desc: "Architectured and developed Full-stack application  Interface and Data Lake solution for managing and analyzing CDR (Call Detail Records).It focuses on monitoring MSAN (Multi-Service Access Node) details, DSL IDs, and BNG (Broadband Network Gateway) Interfaces.The solution enables: Realtime collection and storage of CDR data Integration of MSAN and BNG network elements for performance monitoring. Developed the LLM model on Datasets and generated Insights on the data for user's better understanding and identifying the issues.",
       tech: ["TensorFlow", "Keras", "LLM", "Python", "Reactjs", "Django", "VectorDB", "OracleDB"],
      associated: "Airtel"
    },
       {
      title: "AIM(Airtel Image Manager)",
      desc: "Architectured and developed Full-stack application  Designed and implemented a custom interface to replace the Cisco SWIM interface, enabling efficient and automated upgrades across multiple vendor routers, including Cisco, Nokia, Huawei, Juniper, and Ciena",
       tech: ["TensorFlow", "Keras", "LLM", "Python", "Reactjs", "Django", "VectorDB", "OracleDB"],
      associated: "Airtel"
    },
     {
      title: "Application Development",
      desc: "Developed and Handling a  Full-stack application for adding new services and platform for the users to enable the accessibility of the courses.",
       tech: ["React.js", "Node.js", "MongoDB", "Express.js", "GCP","REST API"],
      associated: "Verzeo"
    },
         {
      title: "Quantix",
      desc: "Developed and Handling a  Full-stack application for adding new services and platform for the users to enable the hospitality to the users for higher accessibility.",
       tech: ["React.js", "Customer Service Management", "Problem-Solving & Adaptability", "Data Science","Node.js","RESTAPI","Express.js"],
      associated: "dormhostels.com"
    },
    {
        title: "Project Catalyst",
      desc: "Designed and developed the UI & UX using figma tool and then designed that wireframe Front-End desgining and development.",
       tech: ["User Interface(UI)", "User Experience(UX)", "Front-End Development", "JavaScript", "HTML", "CSS"],
      associated: "Filmyloop"
    }
  ];

  return (
    <div className="portfolio-container">

      {/* HERO SECTION */}

      <header className="container hero-header">

        <div className="hero-content">

          <h1 className="hero-title">Vivek Singh</h1>

          <h2 className="hero-subtitle">
            Principal AI Engineer & Software Leader
          </h2>

          <p className="hero-description">
            Specializing in the architecture of intelligent AI systems with
            expertise in Generative AI, Agentic AI, and full-stack AI & automation.
          </p>

          <div className="social-links">

            <a
              href="https://www.linkedin.com/in/vivek-singh2712"
              className="social-icon linkedin"
            >
              <Linkedin size={20} />
            </a>

            <a href="mailto:singhviv2712@gmail.com" className="social-icon">
              <Mail size={20} />
            </a>

            <a href={Resume} download className="social-icon" style={{textDecoration:"None"}}>
              Download Resume
            </a>

          </div>

        </div>

        <div className="hero-image-container">
          <img
            src={ProfilePhoto}
            alt="Vivek Singh"
            className="profile-img"
          />
        </div>

      </header>

      {/* ABOUT ME */}

      <section className="container about-section">

  <h3 className="section-title">About Me</h3>

  <div className="about-grid">

    <div className="about-text">

      <p>
      I am an AI Engineer and Software Architect passionate about building intelligent systems that transform complex operations into autonomous decision platforms. My work focuses on designing scalable AI architectures that combine Generative AI, Large Language Models, Machine Learning, and modern full-stack engineering.
      </p>

      <p>
      Over the years, I have engineered production-grade AI platforms including custom LLM architectures, Retrieval-Augmented Generation (RAG) pipelines, predictive analytics systems, and large-scale automation solutions used in telecom network environments.
      </p>

      <p>
      My expertise spans the full lifecycle of AI systems — from model design and training to enterprise integration, deployment, and real-time analytics platforms.
      </p>

      <p>
      I strongly believe that the future of engineering lies in intelligent automation. My goal is to build AI-driven platforms that enhance operational intelligence, reduce manual complexity, and enable faster decision-making at scale.
      </p>

    </div>

    <div className="about-highlights">

     <div className="highlight-card">
    <h4>Years of Experience</h4>
    <p>4 Years 2 Months building AI systems and enterprise automation platforms.</p>
  </div>
            
      <div className="highlight-card">
        <h4>AI Systems</h4>
        <p>Solution Architecture, LLM Architectures, RAG Pipelines, Agentic AI Platforms, AI Aigorithm's, System Design</p>
      </div>

      <div className="highlight-card">
        <h4>Enterprise Platforms</h4>
        <p>Telecom AI Systems, Network Automation, Predictive Analytics</p>
      </div>

      <div className="highlight-card">
        <h4>Engineering Focus</h4>
        <p>Scalable AI Infrastructure, Intelligent Automation Platforms</p>
      </div>

    </div>

  </div>

</section>

      {/* SKILLS */}

      <section className="skills-section">

        <div className="container">

          <h3 className="section-title">Technical Expertise</h3>

          <div className="skills-grid">

            <div className="skill-card">
              <Cpu size={40} />
              <h4>AI & ML</h4>
              <p>
                AI Algorithms, LLM, RAG, Agentic AI, Transformer Architecture,
                Machine Learning, Deep Learning, U-Net Architecture, GenAI,
                LangChain, LangSmith, n8n, NLP, MCP , A2A.
              </p>
            </div>

            <div className="skill-card">
              <Code size={40} />
              <h4>Full Stack</h4>
              <p>
                Python, FastAPI, ReactJS, Django, Flask, REST APIs,
                Microservices, Data Structures & Algorithms,
                System Design, Micro-Frontend, OracleDB, VectorDB
              </p>
            </div>

            <div className="skill-card">
              <Database size={40} />
              <h4>Data Science</h4>
              <p>
                Vector DB, Oracle DB, Power BI, Data Analytics,
                Data Visualization, Machine Learning, Deep Learning
              </p>
            </div>

            <div className="skill-card">
              <Layers size={40} />
              <h4>DevOps & Integration</h4>
              <p>
                Docker, CI/CD, SSO, LDAP, Kafka, ELK, Kubernetes,
                GCP, Jenkins, GitHub
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* PROJECTS */}

      <section className="container projects-section">

        <h3 className="section-title">Featured Projects</h3>

        <div className="projects-grid">

          {projects.map((proj, idx) => (
            <div key={idx} className="project-card">

              <h4>{proj.title}</h4>
               {proj.associated && (
      <div className="project-associated">
        Associated: {proj.associated}
      </div>
    )}
              <p>{proj.desc}</p>

              <div className="tech-stack">
                {proj.tech.map((t, i) => (
                  <span key={i} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

      </section>

      {/* ARCHITECTURE */}

     <section className="container architecture-section">

  <h3 className="section-title">Architecture & System Design</h3>

  <div className="architecture-item">
    Design and development of enterprise LLM architecture (AirLM).
  </div>

  <div className="architecture-item">
    Implementation of Retrieval Augmented Generation (RAG) pipelines.
  </div>

  <div className="architecture-item">
    AI-driven anomaly detection architecture for network operations.
  </div>

  <div className="architecture-item">
    Real-time predictive analytics systems using LSTM models.
  </div>

  <div className="architecture-item">
    End-to-end ETL pipelines for enterprise data platforms.
  </div>

  <div className="architecture-item">
    Microservice-based full-stack platforms for AI-powered applications.
  </div>

</section>

      {/* ACHIEVEMENTS */}

     <section className="container achievements-section">

  <h3 className="section-title">Professional Achievements/Certificate of Appreciation</h3>

  <div className="achievement-item">
    Single Window Login implementation for enterprise authentication systems.
  </div>

  <div className="achievement-item">
    AIM Appreciation Award for engineering innovation.
  </div>

  <div className="achievement-item">
    Developed 100+ automation scripts improving operational efficiency.
  </div>

  <div className="achievement-item">
    Designed and developed custom enterprise LLM model (AirLM) for Conversational AI & Image Generation.
  </div>
        <div className="achievement-item">
    Problem Solving Silver Star badge in Algorithms development, Java, and Python.
  </div>

</section>

      {/* PUBLICATION */}

      <section className="container publication-section">

        <h3 className="section-title">Publications / Research</h3>

        <h4>Face Age Estimation: A Survey</h4>

        <p><strong>IEEE · Jul 18, 2022</strong></p>

        <p>
          Over the years researchers have been attempting to evolve ways for
          computers to discern and acknowledge visual data. Age estimation has
          become a pivotal field in computer vision owing to its many real-world
          applications.
        </p>

        <p>
          This research paper presents a comprehensive survey of existing
          methodologies and approaches used in facial age estimation systems,
          highlighting gaps and potential future research opportunities.
        </p>

        <p>
          Published in ICACITE Conference. <a href="https://ieeexplore.ieee.org/document/9823726"  style={{textdecoration:'None'}}>Show Publication</a>
        </p>

      </section>

      {/* FOOTER */}

      <footer className="footer">
        <p>© 2026 Vivek Singh | Principal AI Engineer</p>
      </footer>

    </div>
  );
};

export default Portfolio;
