import { Label,Li} from './Statistics.styled';
import PropTypes from 'prop-types';

export const StatisticLi = ({ static: { label, percentage } }) => {
  return <Li  className='bg__color'>
      <Label>{label}</Label>
      <span>{percentage}%</span>
    </Li>
    
}

StatisticLi.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};



window.addEventListener('load', () => {
  setTimeout(function() {
    const bgColor = document.querySelectorAll(".bg__color");
    for (const bgr of bgColor) {
        function getRandomHexColor() {
          return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        }

        const hexColor = getRandomHexColor();
        bgr.style.backgroundColor = `${hexColor}`;
    }
  }, 0); 
})


