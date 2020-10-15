import React from 'react';
import curriculumVitae from '../doc/ProfileLinkedin.pdf';
import '../CSS/cv.css';

function CV() {
    return (
        <div className="CV">
            <embed src={curriculumVitae} />
        </div>
    )
}

export default CV;
