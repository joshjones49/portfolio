const resumeObj = {
    header: {
        name: 'Joshua Jones',
        phone: '317-493-6150',
        email: 'joshjones200285@gmail.com',
        linkedinLabel: 'LinkedIn: joshjones49',
        location: 'Marietta, GA',
        portfolioLabel: 'Software Developer Projects',
        portfolioLink: 'https://github.com/joshjones49'
    },
    projectList: [
        {
            title: 'Simple Telemetry Processing Simulation',
            stack: 'C++',
            date: 'Feb 2026',
            bullets: [
                'Engineered an object-oriented, extensible sensor processing system simulating aerospace telemetry data (altitude, velocity) using polymorphism, inheritance, and factory design.',
                'Implemented thread-safe logging and memory management using RAII to ensure reliable concurrent operation and resource cleanup.',
                'Developed CMake-based build system and comprehensive Google Test suite for automated verification of simulation accuracy, threshold monitoring, and fault detection logic.'
            ]
        },
        {
            title: 'Project Management Dashboard',
            stack: 'Java',
            date: 'May 2025',
            bullets: [
                'Collaborated in a 4-person Agile team to deliver a full-stack dashboard managing User, Project, Team, Company, and Announcement entities using Java Spring Boot, Angular/TypeScript, and PostgreSQL.',
                'Designed and implemented role-based access control for secure CRUD operations, enabling admin-level oversight while restricting non-admin users to team-specific views and edits.',
                'Built optimized RESTful backend with Lombok, JPQL queries, and GitHub-based CI, supporting real-time data updates and efficient cross-team collaboration.'
            ]
        }
    ],
    professionalExperience: [
        {
            company: 'Lockheed Martin',
            role: 'Technical Intelligence Analyst (Internship)',
            location: '',
            date: 'Jan 2026',
            bullets: [
                'Conducted in-depth technical research and data analysis on hypersonic glide body technologies, satellite bus architectures, and telemetry anomaly detection patterns.',
                'Synthesized findings into actionable engineering assessments that directly informed leadership decisions on project feasibility and risk mitigation.'
            ]
        },
        {
            company: 'Bridgestone Americas',
            role: 'Senior Learning Data Analyst',
            location: 'Nashville, TN',
            date: 'June 2024 - Jan 2025',
            bullets: [
                'Increased proper leadership course enrollment by 20% company-wide within 2 weeks by creating a detailed weekly report using MS Excel and Alteryx that allowed field leaders to track enrollments, completions, and assign courses more effectively.',
                'Increased teammates tire training completion rates 15% in a month by creating a report that showed low completion rates, allowing leadership to identify and address the issue of low sales for company branded tires.'
            ]
        }
    ],
    militaryExperience: {
        company: 'US Army',
        role: 'Cavalry Scout Section Leader',
        location: 'Ft. Hood, TX',
        date: 'June 2017 - Nov 2023',
        bullets: [
            'Led a 12-member team, executing strategic plans, training personnel, and driving professional growth. Managed operations, evaluations, and mentorship.',
            'Responsible and signed for more than $12 million worth of equipment to include 3 Stryker vehicles and all assigned basic equipment, ASIP radios, JBC-P, and weapons.',
            'Conducted monthly reviews with soldiers to help develop them professionally by addressing any performance issues, acknowledgement of exceeded standards, and career guidance.'
        ]
    },
    educationAndCertificates: [
        'Become a C++ Pro: Ultimate Developer Guide (Coursera) | Dec 2025 - Mar 2026',
        'Cook Systems FastTrack Java Program | April 2025 - May 2025',
        'Galvanize Coding Bootcamp | Oct 2023 - Feb 2024'
    ]
}

export default resumeObj