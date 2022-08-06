import { Label,Li} from './Statistics.styled';
import PropTypes from 'prop-types';

export const StatisticLi = ({ static: { label, percentage } }) => {
  
  return <Li className='bg__color' selected={ label === ''}>
      <Label>{label}</Label>
      <span>{percentage}%</span>
    </Li>
    
}

StatisticLi.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
  id: PropTypes.string,
};


