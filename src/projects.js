import dojoScreenshot from './assets/images/projectImages/dojo.jpg'
import tastebudsScreenshot from './assets/images/projectImages/tastebuds.jpg'


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
        name: 'Weather Dashboard',
        githubURL: 'https://github.com/AnthonyRqqq/weather-dashboard',
        deployedURL: 'https://anthonyrqqq.github.io/weather-dashboard/',
    },
    {
        name: 'SVG Logo Maker',
        githubURL: 'https://github.com/AnthonyRqqq/svg-logo-make',
        // No front-end visibility, same link to github for convenience in react formatting
        deployedURL: 'https://github.com/AnthonyRqqq/svg-logo-make',
    },
]

export default projects;