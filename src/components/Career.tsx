import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Experience <span>&</span>
          <br /> Build Journey
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Current */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Developer</h4>
                <h5>CBIT Open Source Club (COSC)</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building and contributing to open-source systems with a focus on 
              full-stack engineering, AI-driven applications, and scalable architectures.
              Collaborating in fast-paced environments to ship real-world solutions.
            </p>
          </div>

          {/* Internship */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer Intern</h4>
                <h5>Codegnan · Hyderabad</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Engineered production-ready frontend systems using React and Vite,
              integrated backend services via Firebase and REST APIs, and handled
              deployment pipelines using Vercel within the MERN ecosystem.
            </p>
          </div>

          {/* AI Builder */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Builder</h4>
                <h5>AI System → Startup Direction</h5>
              </div>
              <h3>2025 — Present</h3>
            </div>
            <p>
              Architecting a full-stack AI platform that converts natural language
              into end-to-end machine learning pipelines. Designed a modular multi-agent
              system for dataset discovery, automated training, orchestration, and live
              monitoring—evolving toward a startup-grade product.
            </p>
          </div>

          {/* PaymentOS */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>PaymentOS</h4>
                <h5>Intelligent Payments Layer</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built a payments intelligence system integrating multiple gateways with
              smart routing logic based on latency, bank behavior, and failure patterns.
              Designed recovery strategies to maximize transaction success rates.
            </p>
          </div>

          {/* CV System */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Terrain Segmentation</h4>
                <h5>Computer Vision System</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Developed an AI-based perception system for off-road environments using
              advanced vision models. Implemented real-time segmentation, analytics,
              and visualization pipelines for intelligent terrain understanding.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;