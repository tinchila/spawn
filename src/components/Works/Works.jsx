import { useState } from 'react';
import './Works.css';
import worksList from './WorkList/WorkList';

const Works = () => {
  const [showAllWorks, setShowAllWorks] = useState(false);

  const toggleShowAllWorks = () => {
    setShowAllWorks(!showAllWorks);
  };

  return (
    <section id='works'> 
        <h2 className='worksTitle'>Tracks</h2>
        <div className='worksImgs'>
          {worksList.slice(0, showAllWorks ? worksList.length : 3).map((work, index) => (
            <div key={index} className='workItem'>
              <a href={work.link} className='workLink' target='_blank'>
                <img src={work.image} alt={work.alt} className='workImg' />
                <div className='workInfo'>
                  <h3 className='workTitle'>{work.title}</h3>
                  <p className='workDescription'>{work.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
        {worksList.length > 3 && (
                <button className='btnM' onClick={toggleShowAllWorks}>
                {showAllWorks ? 'See Less' : 'See More'}
                </button>
        )}
    </section>
  );
};

export default Works;
