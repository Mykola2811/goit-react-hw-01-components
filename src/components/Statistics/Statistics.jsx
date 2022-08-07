import { Wrapper, List, H2, Label, Li } from './Statistics.styled';
import PropTypes from 'prop-types';
import './getRandomHexColor';


export const Statistics = ({data}) => {
  return <Wrapper className="statistics">
    <H2 className="title">Upload stats</H2>
    <List className="stat-list">
      {data.map(data => (
        <Li key={data.id} className='bg__color'>
          <Label>{data.label}</Label>
          <span>{data.percentage}%</span>
        </Li>))
      }
  </List>
</Wrapper>;
}

Statistics.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
