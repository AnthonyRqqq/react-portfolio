import React from 'react';
import { projects } from '../projects';

export default function Project({ projects }) {
    return (
        <div className='container'>
            <h3>Projects</h3>
            <ul className='list-group'>
                {/* Use map method to iterate through each project and return array of list items*/}
                {projects.map((project) => (
                    <li className='list-group-item' key={project.name}>
                        {`${project.name}, ${project.githubURL}, ${project.deployedURL}`}
                    </li>
                ))}
            </ul>
        </div>
    );
}