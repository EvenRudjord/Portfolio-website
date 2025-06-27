import {Col} from 'react-bootstrap';

export const SkillCard = ({ language, imgUrl }) => {
  return (
        <div className="skillcard">
            <img src={imgUrl}/>
            <h4>{language}</h4>
        </div>
  );
}