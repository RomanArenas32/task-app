import step1 from '../assets/paso1.png';
import step2 from '../assets/paso2.png';
import step3 from '../assets/paso3.png';
import step4 from '../assets/paso4.png';

export const Guides = () => {
  return (
    <div className="guide">
      <div className="guide_card">
        <img src={step1} alt="paso 1 uso de la app" className='guide_card-img'/>
      </div>

      <div className="guide_card">
        <img src={step2} alt="paso 1 uso de la app" className='guide_card-img'/>
        
      </div>

      <div className="guide_card">
        <img src={step3} alt="paso 1 uso de la app" className='guide_card-img'/>
      </div>

      <div className="guide_card">
        <img src={step4} alt="paso 1 uso de la app" className='guide_card-img'/>
      </div>
    </div>
  );
};
