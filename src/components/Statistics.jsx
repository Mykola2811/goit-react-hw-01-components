import { Wrapper,List,H2 } from './styled/Statistics.styled';
import { StatisticLi } from './StatisticLi';
import data from '../data.json';

export const Statistics = () => {
    
  return <Wrapper className="statistics">
    <H2 className="title">Upload stats</H2>

  <List className="stat-list">
        {data.map(statics => (<StatisticLi key={statics.id} title="Upload stats" static={statics} />))}
  </List>
</Wrapper>;
}