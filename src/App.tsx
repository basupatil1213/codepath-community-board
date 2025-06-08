import './App.css'
// import sampleProjectsData from "../data/sample_projects.json";
import type { Project } from './types';
import ProjectCard from './components/ProjectCard';

const sampleProjectsData : {
  projects: Project[]
}  = {
    "projects": [
        {
            "name": "EcoTrack",
            "description": "A platform to track and reduce your carbon footprint.",
            "tech_stack": ["React", "Node.js", "MongoDB"],
            "owner": {
                "name": "Alice Green",
                "email": "alice.green@example.com"
            },
            "gihtub_link": "https://github.com/alicegreen/ecotrack",
            "demo_link": "https://ecotrack-demo.com"
        },
        {
            "name": "BookSwap",
            "description": "An online community for swapping books locally.",
            "tech_stack": ["Vue.js", "Firebase"],
            "owner": {
                "name": "Bob Smith",
                "email": "bob.smith@example.com"
            },
            "gihtub_link": "https://github.com/bobsmith/bookswap",
            "demo_link": "https://bookswap-demo.com"
        },
        {
            "name": "FitFriends",
            "description": "Connect with friends for fitness challenges.",
            "tech_stack": ["Angular", "Express", "PostgreSQL"],
            "owner": {
                "name": "Carol Lee",
                "email": "carol.lee@example.com"
            },
            "gihtub_link": "https://github.com/carollee/fitfriends"
        },
        {
            "name": "RecipeShare",
            "description": "Share and discover new recipes.",
            "tech_stack": ["React", "Django", "SQLite"],
            "owner": {
                "name": "David Kim",
                "email": "david.kim@example.com"
            },
            "gihtub_link": "https://github.com/davidkim/recipeshare",
            "demo_link": "https://recipeshare-demo.com"
        },
        {
            "name": "PetAdopt",
            "description": "Find and adopt pets from local shelters.",
            "tech_stack": ["Next.js", "MongoDB"],
            "owner": {
                "name": "Ella Brown",
                "email": "ella.brown@example.com"
            },
            "gihtub_link": "https://github.com/ellabrown/petadopt"
        },
        {
            "name": "Evently",
            "description": "Organize and discover local events.",
            "tech_stack": ["Svelte", "Firebase"],
            "owner": {
                "name": "Frank White",
                "email": "frank.white@example.com"
            },
            "gihtub_link": "https://github.com/frankwhite/evently",
            "demo_link": "https://evently-demo.com"
        },
        {
            "name": "Travelogue",
            "description": "Document and share your travel experiences.",
            "tech_stack": ["React", "Flask", "MySQL"],
            "owner": {
                "name": "Grace Park",
                "email": "grace.park@example.com"
            },
            "gihtub_link": "https://github.com/gracepark/travelogue"
        },
        {
            "name": "StudyBuddy",
            "description": "Find study partners for your courses.",
            "tech_stack": ["Vue.js", "Express", "MongoDB"],
            "owner": {
                "name": "Henry Adams",
                "email": "henry.adams@example.com"
            },
            "gihtub_link": "https://github.com/henryadams/studybuddy"
        },
        {
            "name": "ArtConnect",
            "description": "A community for artists to showcase their work.",
            "tech_stack": ["Angular", "Firebase"],
            "owner": {
                "name": "Ivy Chen",
                "email": "ivy.chen@example.com"
            },
            "gihtub_link": "https://github.com/ivychen/artconnect",
            "demo_link": "https://artconnect-demo.com"
        },
        {
            "name": "CodeMentor",
            "description": "Connect with mentors for coding help.",
            "tech_stack": ["React", "Node.js", "PostgreSQL"],
            "owner": {
                "name": "Jack Lee",
                "email": "jack.lee@example.com"
            },
            "gihtub_link": "https://github.com/jacklee/codementor"
        },
        {
            "name": "PlantPal",
            "description": "Track and care for your houseplants.",
            "tech_stack": ["Svelte", "Django", "SQLite"],
            "owner": {
                "name": "Kara Singh",
                "email": "kara.singh@example.com"
            },
            "gihtub_link": "https://github.com/karasingh/plantpal"
        },
        {
            "name": "MovieMatch",
            "description": "Find movies to watch with friends.",
            "tech_stack": ["Vue.js", "Express", "MongoDB"],
            "owner": {
                "name": "Liam Turner",
                "email": "liam.turner@example.com"
            },
            "gihtub_link": "https://github.com/liamturner/moviematch",
            "demo_link": "https://moviematch-demo.com"
        },
        {
            "name": "SkillShare",
            "description": "Share and learn new skills from others.",
            "tech_stack": ["React", "Flask", "PostgreSQL"],
            "owner": {
                "name": "Mia Patel",
                "email": "mia.patel@example.com"
            },
            "gihtub_link": "https://github.com/miapatel/skillshare"
        },
        {
            "name": "GreenThumb",
            "description": "A gardening community for sharing tips.",
            "tech_stack": ["Next.js", "MongoDB"],
            "owner": {
                "name": "Noah Scott",
                "email": "noah.scott@example.com"
            },
            "gihtub_link": "https://github.com/noahscott/greenthumb"
        },
        {
            "name": "QuizMaster",
            "description": "Create and play quizzes with friends.",
            "tech_stack": ["Angular", "Node.js", "MySQL"],
            "owner": {
                "name": "Olivia Evans",
                "email": "olivia.evans@example.com"
            },
            "gihtub_link": "https://github.com/oliviaevans/quizmaster",
            "demo_link": "https://quizmaster-demo.com"
        },
        {
            "name": "MusicHub",
            "description": "Share and discover new music.",
            "tech_stack": ["React", "Express", "MongoDB"],
            "owner": {
                "name": "Paul Walker",
                "email": "paul.walker@example.com"
            },
            "gihtub_link": "https://github.com/paulwalker/musichub"
        },
        {
            "name": "VolunteerNow",
            "description": "Find and join local volunteering opportunities.",
            "tech_stack": ["Vue.js", "Firebase"],
            "owner": {
                "name": "Quinn Brooks",
                "email": "quinn.brooks@example.com"
            },
            "gihtub_link": "https://github.com/quinnbrooks/volunteernow"
        },
        {
            "name": "BudgetBuddy",
            "description": "Manage your personal finances easily.",
            "tech_stack": ["Svelte", "Node.js", "PostgreSQL"],
            "owner": {
                "name": "Ruby Hall",
                "email": "ruby.hall@example.com"
            },
            "gihtub_link": "https://github.com/rubyhall/budgetbuddy",
            "demo_link": "https://budgetbuddy-demo.com"
        },
        {
            "name": "PhotoSnap",
            "description": "Share and comment on photos with friends.",
            "tech_stack": ["React", "Django", "SQLite"],
            "owner": {
                "name": "Sam Young",
                "email": "sam.young@example.com"
            },
            "gihtub_link": "https://github.com/samyoung/photosnap"
        },
        {
            "name": "MindfulMe",
            "description": "A mindfulness and meditation app.",
            "tech_stack": ["Next.js", "MongoDB"],
            "owner": {
                "name": "Tina Zhao",
                "email": "tina.zhao@example.com"
            },
            "gihtub_link": "https://github.com/tinazhao/mindfulme",
            "demo_link": "https://mindfulme-demo.com"
        }
    ]
}

function App() {
  const sampleProjects = sampleProjectsData.projects;
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
      {sampleProjects.map((project: Project, idx: number) => (
        <ProjectCard key={idx} project={project} />
      ))}
    </div>
  );
}

export default App
