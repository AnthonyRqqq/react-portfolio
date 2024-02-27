// Import screenshots
import dojoScreenshot from './assets/images/projectImages/dojo.jpg'
import tastebudsScreenshot from './assets/images/projectImages/tastebuds.jpg'
import javascriptScreenshot from './assets/images/projectImages/javascriptQuiz.jpg'
import plannerScreenshot from './assets/images/projectImages/planner.jpg'
import randomPasswordScreenshot from './assets/images/projectImages/randomPassword.jpg'
import weatherDashboardScreenshot from './assets/images/projectImages/weatherDashboard.jpg'


// List of project data to be displayed
const projects = [
    {
        name: 'TasteBuds',
        githubURL: 'https://github.com/Aaron-Heath/tastebuds',
        deployedURL: 'https://tastebuds-app-de96bd264a71.herokuapp.com/',
        screenshot: tastebudsScreenshot,
        imageText: 'tastebuds screenshot'
    },
    {
        name: 'Box Office Dojo',
        githubURL: 'https://github.com/Mb739132/Box-Office-Dojo',
        deployedURL: 'https://mb739132.github.io/Box-Office-Dojo/',
        screenshot: dojoScreenshot,
        imageText: 'box office dojo screenshot'
    },
    {
        name: 'JavaScript Quiz',
        githubURL: 'https://github.com/AnthonyRqqq/js-timed-quiz',
        deployedURL: 'https://anthonyrqqq.github.io/js-timed-quiz/',
        screenshot: javascriptScreenshot,
        imageText: 'screenshot of a timed javascript quiz'
    },
    {
        name: 'Work Day Scheduler',
        githubURL: 'https://github.com/AnthonyRqqq/work-day-scheduler',
        deployedURL: 'https://anthonyrqqq.github.io/work-day-scheduler/',
        screenshot: plannerScreenshot,
        imageText: 'screenshot of a work day scheduler'
    },
    {
        name: 'Random Password Generator',
        githubURL: 'https://github.com/AnthonyRqqq/random-password-generator',
        deployedURL: 'https://anthonyrqqq.github.io/random-password-generator/',
        screenshot: randomPasswordScreenshot,
        imageText: 'screenshot of a random password generator'
    },
    {
        name: 'Weather Dashboard',
        githubURL: 'https://github.com/AnthonyRqqq/weather-dashboard',
        deployedURL: 'https://anthonyrqqq.github.io/weather-dashboard/',
        screenshot: weatherDashboardScreenshot,
        imageText: 'screenshot of a weather dashboard'
    }
]

export default projects;