import Picturific from './picturific.jpg';
import WeatherDashboard from './weather_dashboard.jpg';
import EmployeeTracker from './employee_tracker.avif';
import VehicleBuilder from './vehicle_builder.jpg';
import ReadmeGenerator from './readme_generator.png';
import ProjectPortfolio from './react_portfolio.png';

const projects = [
    {
      name: "Picturific",
      repo: "https://github.com/brianleepetros/group-02-picturific",
      link: "https://brianleepetros.github.io/group-02-picturific/",
      description:
        "A place to organize, display, and share customizable photo gallery online with others.",
      image: Picturific,
    },
    {
      name: "WeatherDashboard",
      repo: "https://github.com/sfsneed70/weather_dashboard",
      link: "https://weather-dashboard-ensg.onrender.com/",
      description:
        "Allows the user to enter a city and displays the current weather along with a 5 day forecast.",
      image: WeatherDashboard,
    },
    {
      name: "EmployeeTracker",
      repo: "https://github.com/sfsneed70/employee_tracker",
      link: "#",
      description:
        "A command-line application to manage a company's employee database, using Node.js, Inquirer, and PostgreSQL.",
      image: EmployeeTracker,
    },
    {
      name: "VehicleBuilder",
      repo: "https://github.com/sfsneed70/challenge-8",
      link: "#",
      description:
        "Allows the user to either create a new vehicle or select an existing vehicle. After going through the creation or selection process, the user is able to perform certain actions with the selected vehicle.",
      image: VehicleBuilder,
    },
    {
      name: "ReadmeGenerator",
      repo: "https://github.com/sfsneed70/readme_generator",
      link: "#",
      description:
        "This application allows the user to quickly create a professional README for a new project.",
      image: ReadmeGenerator,
    },
    {
      name: "ProjectPortfolio",
      repo: "https://github.com/sfsneed70/react_portfolio",
      link: "https://react-portfolio-deploy.netlify.app/",
      description:
        "A place to share your projects not only if you're applying for jobs or working as a freelancer but also so that you can share your work with fellow developers and collaborate on future projects.",
      image: ProjectPortfolio,
    },
  ];
  
  export default projects;