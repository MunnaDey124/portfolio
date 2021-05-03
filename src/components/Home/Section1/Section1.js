import React from 'react';
import SecCard from './SecCard';
import './Section1.css';
const cards = [
    {
        title: 'Design',
        des: 'Create digital products with unique idea',
        pro: '10 projects'
    },
    {
        title: 'Front-End',
        des: 'My coding structure is clean and smooth',
        pro: '15 projects'
    },
    {
        title: 'Back-End',
        des: 'A backend engineer is responsible for designing, building, and maintaining the server-side of web applications.',
        pro: '5 projects'
    }
]

const Section1 = () => {
    return (
        <div className="Section">
            <div className="container text-white">
                <h1 className="aboutSec">About Me</h1>
                <div className="row sec">
                    <div className="col-md-6">
                        <div  >
                            {
                                cards.map(card => <SecCard card={card}></SecCard>)
                            }
                        </div>

                    </div>
                    <div className="col-md-6 button1">
                        <h5>Introduce</h5>
                        <h1>Passion Heart & Soul</h1>
                        <h3>Every great design begin with an even better story</h3>
                        <p>Since beginning my journey as a freelancer designer nearly 4 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use, I am quietly confident, naturally curious.</p>
                        <a href="" className="btn btn-Success button">MoreInfo</a>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Section1;