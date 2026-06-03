export const portfolioData = {
  name: "D Eeshan Pavan Karteek",
  contact: {
    phone: "+91-81066 17544",
    email: "eeshankarteek26@gmail.com",
    github: "https://github.com/Iameeshan26",
    linkedin: "https://www.linkedin.com/in/dontarajueeshan/",
  },
  education: {
    degree: "B-Tech, CSE (AI&ML)",
    institution: "Sri Venkateshwara College of Engineering",
    cgpa: "8.74",
    period: "2022 - 2026",
  },
  specializations: {
    sde: {
      title: "Software Development Engineer",
      summary: "Computer Science student with experience in developing software systems and optimizing real-time applications. Demonstrated ability to enhance software performance and efficiency through data-driven techniques. Skilled in Python and Java, with experience in backend development and scalable software architecture.",
      skills: [
        { category: "Languages", items: ["Python", "Java", "C"] },
        { category: "Libraries", items: ["React"] },
        { category: "Data & Databases", items: ["MySQL", "Firebase", "Pandas", "PostgreSQL"] },
        { category: "Systems & Tools", items: ["Git", "GitHub"] },
        { category: "Dev Tools", items: ["VS Code", "Eclipse", "Jupyter Notebook", "Google Colab"] },
      ],
      projects: [
        {
          title: "Multi-tenant Ticketing System",
          technologies: ["React", "TypeScript", "Vite", "Node.js", "Express", "JSON DB"],
          description: "Developed a secure ticketing system with Organization-Based Access Control (OBAC) for data isolation.",
          points: [
            "Created a native SMTP listener to parse incoming emails into structured tickets in real-time.",
            "Designed a race-condition-resistant backend using an atomic JSON database with sequential write-queue mechanisms.",
            "Built a contextual search engine with React hooks for safe cross-tenant data scanning.",
            "Established a two-step registration process with safety locks to prevent accidental deletion of root administrators.",
          ],
        },
        {
          title: "Bone Fracture Classification Model",
          technologies: ["Python", "TensorFlow", "Flask", "Scikit-Learn", "DenseNet121", "XGBoost"],
          description: "Engineered and benchmarked multiple CNN architectures for high-accuracy fracture classification.",
          points: [
            "Improved model accuracy from 84.2% to 92.4% by designing a hybrid architecture (DenseNet121 + XGBoost).",
            "Benchmarked deep learning + classical ML combinations (SVM, Random Forest) to optimize performance.",
            "Deployed via Flask API for real-time inference on 10,000+ labeled X-ray images.",
          ],
        },
      ],
    },
    mle: {
      title: "Machine Learning Engineer",
      summary: "ML-focused Computer Science student with experience building deep learning models and real-time optimization systems. Demonstrated ability to improve model accuracy and system efficiency through data-driven approaches. Skilled in Python, TensorFlow, and scalable ML pipelines, with working knowledge of Java for backend development.",
      skills: [
        { category: "Languages", items: ["Python", "Java"] },
        { category: "Machine Learning", items: ["TensorFlow", "Scikit-learn", "XGBoost", "CNN Architectures"] },
        { category: "Backend", items: ["Flask", "REST APIs", "Node.js"] },
        { category: "Data & Databases", items: ["MySQL", "Firebase", "Pandas"] },
        { category: "Systems & Tools", items: ["Kafka", "Git", "GitHub"] },
      ],
      projects: [
        {
          title: "Last-Mile Logistics Optimizer",
          technologies: ["Python", "OR-Tools", "XGBoost", "Kafka", "TomTom API", "PostGIS"],
          description: "Built a real-time, event-driven route optimization system integrating live traffic and weather data.",
          points: [
            "Reduced fuel costs by 20% and delivery time by 15% through traffic-aware routing and speed modeling.",
            "Improved ETA prediction accuracy by 25% using ML-based dwell time estimation.",
            "Enabled real-time route re-optimization with sub-second response using Kafka-based event triggers.",
            "Architected a hybrid ML + optimization pipeline to predict hidden delays.",
          ],
        },
        {
          title: "Bone Fracture Classification Model",
          technologies: ["Python", "TensorFlow", "Flask", "Scikit-Learn", "VGG19", "EfficientNet"],
          description: "Engineered and benchmarked multiple CNN architectures for fracture classification.",
          points: [
            "Improved model accuracy from 84.2% to 92.4% through hybrid DenseNet121 + XGBoost architecture.",
            "Trained on 10,000+ labeled X-ray images across 10 classes.",
            "Evaluated using precision, recall, and F1-score for robust performance validation.",
          ],
        },
      ],
    },
  },
  internship: {
    role: "Gen AI Intern",
    company: "Smart Bridge",
    period: "Dec 2025 – Mar 2026",
    points: [
      "Developed a Generative AI application using Gemini API supporting text and image-based inputs.",
      "Engineered an end-to-end pipeline for input processing, prompt generation, and response handling.",
      "Automated recipe generation and nutritional analysis, reducing manual search time by ~70%.",
      "Integrated image-based input processing to extract food information and generate contextual outputs.",
    ],
  },
  blogs: [
    {
      title: "The Future of Scalable Systems",
      excerpt: "Exploring the next generation of multi-tenant architectures and secure data isolation.",
      date: "Coming Soon",
      category: "SDE",
    },
    {
      title: "Optimizing ML Pipelines",
      excerpt: "Lessons learned from building real-time logistics optimizers with sub-second response times.",
      date: "Coming Soon",
      category: "MLE",
    },
  ],
};
