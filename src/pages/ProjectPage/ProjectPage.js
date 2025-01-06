import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectData } from '../../data/ProjectData';
import './ProjectPage.css';
import ImagesGallery from '../../Components/SmallComponents/ImagesGallery/ImagesGallery';

function ProjectPage() {
    const { projectID } = useParams(); // Extract projectID from the URL
    const project = ProjectData.find(proj => proj.id === projectID); // Find the project based on the ID

    return (
        <div className='App'>
            <div className='project-page-container'>
                {project ? (
                    <div className='project-details'>
                        <h1 className='project-title'>{project.title}</h1>
                        <p className='project-technologies'><strong>Technologies:</strong> {project.technologies}</p>
                        <p className='project-duration'><strong>Duration:</strong> {project.startMonth} - {project.endMonth}</p>

                        <div className='project-description'>
                            <h2>Key Highlights:</h2>
                            <ul>
                                {project.bulletPoints.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                        </div>

                        {project.link && (
                            <p className='project-link'>
                                <a href={project.link} target='_blank' rel='noopener noreferrer'>Visit Project</a>
                            </p>
                        )}

                        {project.media.length > 0 && (
                            <div className='project-media'>
                                <h2>Media:</h2>
                                <ImagesGallery imagesData={project.media} />
                            </div>
                        )}
                    </div>
                ) : (
                    <div className='error-container'>
                        <h1>Error 404</h1>
                        <p>Project not found</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProjectPage;
