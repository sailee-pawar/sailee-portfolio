export default function Portfolio() {
  const skills = [
    "Python",
    "PHP (Laravel)",
    "Node.js",
    "JavaScript",
    "AWS Lambda",
    "MySQL",
    "Jenkins",
    "Salesforce",
    "Bootstrap",
    "REST APIs",
    "Automation",
    "Git"
  ];

  const projects = [
    {
      title: "BizOps Automation",
      description:
        "Developed AWS Lambda automation workflows using Python and AWS RDS for company setup, configuration, and ConnectWise ticket automation.",
    },
    {
      title: "Vulnerability Management Dashboard",
      description:
        "Built backend scripts and dashboards using Laravel, AWS Lambda, MySQL, and JavaScript for centralized vulnerability reporting.",
    },
    {
      title: "CSS Module Sync with Evidence Collection",
      description:
        "Created backend synchronization modules and frontend components using JavaScript, HTML, CSS, and Bootstrap.",
    },
  ];

  const experience = [
    {
      company: "ControlCase",
      role: "Engineer",
      period: "Apr 2025 – Present",
      points: [
        "Develop enterprise web applications using Laravel, Python, and Node.js.",
        "Build AWS Lambda automation workflows and optimize backend systems.",
        "Work on REST APIs, database optimization, and frontend enhancements.",
        "Use Jenkins and AI-assisted development workflows for deployments and productivity.",
      ],
    },
    {
      company: "ControlCase",
      role: "Junior Engineer",
      period: "Jan 2023 – Apr 2025",
      points: [
        "Implemented backend features in Laravel-based applications.",
        "Developed Python automation scripts and AWS workflows.",
        "Optimized APIs, dashboards, and backend reporting modules.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">Sailee Pawar</h1>
            <h2 className="text-2xl font-semibold mb-6 text-gray-200">
              Full Stack Developer
            </h2>
            <p className="text-lg leading-relaxed text-gray-300">
              Full Stack Developer with 3+ years of experience building backend systems,
              cloud automation workflows, enterprise web applications, and scalable APIs
              using Python, Laravel, Node.js, JavaScript, and AWS.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

  <a
    href="/Sailee_Pawar_Resume.pdf"
    download
    className="bg-white text-gray-900 px-5 py-3 rounded-2xl font-medium shadow-lg hover:scale-105 transition"
  >
    Download Resume
  </a>

  <a
    href="mailto:sayalibpawar@gmail.com"
    className="border border-white px-5 py-3 rounded-2xl font-medium hover:bg-white hover:text-gray-900 transition"
  >
    Contact Me
  </a>

  <a
    href="https://www.linkedin.com/in/sailee-pawar-ab4a27211/"
    target="_blank"
    className="border border-white px-5 py-3 rounded-2xl font-medium hover:bg-white hover:text-gray-900 transition"
  >
    LinkedIn
  </a>

</div>
          </div>

          <div className="flex justify-center">
            <div className="w-72 h-72 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center shadow-2xl border border-white/20">
              <span className="text-7xl font-bold">SP</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-4 text-center font-medium hover:shadow-xl transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Professional Experience</h2>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-lg transition"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold">{job.role}</h3>
                    <p className="text-gray-600 font-medium">{job.company}</p>
                  </div>
                  <span className="text-gray-500 mt-2 md:mt-0">{job.period}</span>
                </div>

                <ul className="space-y-2 text-gray-700 list-disc pl-5">
                  {job.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-md hover:shadow-2xl transition"
            >
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="py-16 px-6 bg-white">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-3xl font-bold mb-10">
      GitHub Projects
    </h2>

    <div className="grid md:grid-cols-3 gap-6">

      <div className="bg-gray-50 rounded-3xl p-6 shadow-md">
        <h3 className="text-xl font-semibold mb-3">
          AWS Automation Toolkit
        </h3>

        <p className="text-gray-600 mb-4">
          Collection of AWS Lambda automation scripts for
          enterprise workflows and operational tasks.
        </p>

        <a
          href="https://github.com/YOUR_USERNAME/aws-automation"
          target="_blank"
          className="font-medium"
        >
          View Project →
        </a>
      </div>

      <div className="bg-gray-50 rounded-3xl p-6 shadow-md">
        <h3 className="text-xl font-semibold mb-3">
          Laravel REST API
        </h3>

        <p className="text-gray-600 mb-4">
          Backend API project built using Laravel,
          authentication, CRUD operations and MySQL.
        </p>

        <a
          href="https://github.com/YOUR_USERNAME/laravel-api"
          target="_blank"
          className="font-medium"
        >
          View Project →
        </a>
      </div>

      <div className="bg-gray-50 rounded-3xl p-6 shadow-md">
        <h3 className="text-xl font-semibold mb-3">
          Node.js Microservice
        </h3>

        <p className="text-gray-600 mb-4">
          Lightweight Node.js microservice with REST APIs,
          JWT authentication and database integration.
        </p>

        <a
          href="https://github.com/YOUR_USERNAME/node-service"
          target="_blank"
          className="font-medium"
        >
          View Project →
        </a>
      </div>

    </div>
  </div>
</section>


      {/* Contact */}
      <section className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Let’s Connect</h2>
          <p className="text-gray-300 text-lg mb-8">
            Open to Full Stack Developer, Backend Developer, and Cloud Automation opportunities.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="mailto:sayalibpawar@gmail.com"
              className="bg-white text-gray-900 px-6 py-3 rounded-2xl font-medium hover:scale-105 transition"
            >
              sayalibpawar@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/sailee-pawar-ab4a27211/"
              target="_blank"
              className="border border-white px-6 py-3 rounded-2xl font-medium hover:bg-white hover:text-gray-900 transition"
            >
              View LinkedIn Profile
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
