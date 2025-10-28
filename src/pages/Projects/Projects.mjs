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
    githubLink: ''
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

const projectsObj = [
    PMD, SmartCard
]

export default projectsObj