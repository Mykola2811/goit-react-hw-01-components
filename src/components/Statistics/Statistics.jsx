import { Wrapper, List, H2, Label, Li } from './Statistics.styled';
import PropTypes from 'prop-types';
import './getRandomHexColor';

export const Statistics = ({data,title}) => {
  return <Wrapper className="statistics">
    {title !== undefined ? <H2 className="title">{title}</H2> : undefined}
    <List className="stat-list">
      {data.map(({id,label,percentage}) => (
        <Li key={id} className='bg__color'>
          <Label>{label}</Label>
          <span>{percentage}%</span>
        </Li>))
      }
  </List>
</Wrapper>;
}

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  title: PropTypes.string,
};
