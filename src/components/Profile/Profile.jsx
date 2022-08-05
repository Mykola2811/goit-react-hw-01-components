import { Wrapper,Avatar,Stats,StatsLi,Description,Name,Tag,Location,Label,Quantity } from './Profile.styled';
import PropTypes from 'prop-types';


export const Profile = ({ cart: { username, tag, location, avatar, stats: {
  followers,views,likes
}} }) => {
  return <Wrapper>
  <Description>
    <Avatar
      src={avatar}
      alt="User avatar"
    />
    <Name>{username}</Name>
    <Tag >{tag}</Tag>
    <Location>{location}</Location>
  </Description>

  <Stats>
    <StatsLi>
      <Label >Followers</Label>
      <Quantity>{followers}</Quantity>
    </StatsLi>
    <StatsLi>
      <Label>Views</Label>
      <Quantity>{views}</Quantity>
    </StatsLi>
    <StatsLi>
      <Label>Likes</Label>
      <Quantity>{likes}</Quantity>
    </StatsLi>
  </Stats>
</Wrapper>;
}


Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  })
    
};