const PMD = {
    name: "Project Management Dashboard",
    description: "Full stack application created in group of 4 developers for the Cook Systems Java Program final project.",
    front: [
        'Responsive UI/UX design created using Angular',
        'Utilizes resuable components and signals for efficient data flow',
        'Route guards to ensure authorization of a user before accessing a route'
    ],
    back: [
        'Role-based access control system with 2 levels, admin and non-admin',
        'Spring-boot and libraries such as Lombok and Mapstruct for efficient entity mapping',
        'JPQL used for queries to the PostgreSQL database allowing for a scalable RESTful API'
    ],
    technologies: ['Angular', 'Java', 'Spring Boot', 'PostgreSQL'],
    githubLink: 'https://github.com/joshjones49/cook-systems-project-management-dashboard'
}

const SmartCard = {
    name: "SmartCard",
    description: 'Flashcard single page application I created to help myself study the basics of JS, Express, and React.',
    front: [
        'Created using React and libraries such as react-router-dom and react-icons',
        'Implemented the React Context API to eliminate prop drilling',
        'React router allows for smooth page changes'
    ],
    back: [
        'RESTful API with full CRUD functionality',
        'Integrated with PostgreSQL database to manage data',
        'Use of JWT and Bcrypt to allow for authentication and authorization'
    ],
    technologies: ['React', 'Express', 'Node.js', 'PostgreSQL'],
    githubLink: 'https://github.com/joshjones49/smart-card'
}

const HHH = {
    name: "Hogwarts House Hunt",
    description: 'Mini game that allows players to guess what house each character belongs to',
    front: [
        'Created using Angular in a group of 3 developers',
        'Allows players to pick their favorite House before starting the game, personal score is added to the total for the House',
        'Leaderboard to display the high scores and the total scores of each House'
    ],
    back: [],
    technologies: ['Angular'],
    githubLink: 'https://github.com/joshjones49/Hogwarts-House-Hunt'
}

const GoServer = {
    name: "Go HTTP Server",
    description: "Simple HTTP server created using Go, connected to jsonplaceholder for fetching data",
    front: [],
    back: ["Full CRUD functionality"],
    technologies: ['Go'],
    githubLink: "https://github.com/joshjones49/go-http-server"
}

const CPP = {
    name: "Telemetry-Processor",
    description: "Object-oriented telemetry processing simulation that models aerospace sensor data (altitude and velocity)",
    front: [],
    back: [
        "Built with polymorphism, inheritance, and factory patterns to keep sensor processing extensible.",
        "Implemented thread-safe logging and RAII-based memory management for reliable concurrent execution.",
        "Configured CMake builds and Google Test coverage for simulation accuracy, threshold monitoring, and fault detection."
    ],
    technologies: ['C++'],
    githubLink: "https://github.com/joshjones49/Telemetry-Processor"
}

const projectsObj = [
    SmartCard, PMD, CPP, HHH
]

export default projectsObj