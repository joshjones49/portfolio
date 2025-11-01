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
        'Use of JWT and Bcrypt to allow for authentication and authroization'
    ],
    technologies: ['React', 'Express', 'Node.js', 'PostgreSQL'],
    githubLink: 'https://github.com/joshjones49/smart-card'
}

const HHH = {
    name: "Hogwarts House Hunt",
    description: 'Mini game that allows players to guess what house each charcter belongs to',
    front: [
        'Created using Angular',
        'Allows players to pick their favorite House before starting the game, personal score is added to the total for the House',
        'Leaderboard to display the high scores and the total scores of each House'
    ],
    back: [],
    technologies: ['Angular'],
    githubLink: 'https://github.com/joshjones49/Hogwarts-House-Hunt'
}

const projectsObj = [
    SmartCard, PMD, HHH
]

export default projectsObj