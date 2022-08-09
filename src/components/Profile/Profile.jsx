import { Wrapper,Avatar,Stats,StatsLi,Description,Name,Tag,Location,Label,Quantity } from './Profile.styled';
import PropTypes from 'prop-types';


export const Profile = ( {username, tag, location, avatar, stats: {
  followers,views,likes
} }) => {
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
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  })
    
};
