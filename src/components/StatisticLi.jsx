import { Wrapper,Label,Li} from './styled/Statistics.styled';

export const StatisticLi = ({ static: { id, label, percentage } }) => {
    
  return <Li>
      <Label>{label}</Label>
      <span>{percentage}%</span>
    </Li>
    
}