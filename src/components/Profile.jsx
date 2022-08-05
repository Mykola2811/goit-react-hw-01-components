import { Wrapper,Avatar,Stats,StatsLi,Description,Name,Tag,Location,Label,Quantity } from './styled/Cart.styled';

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

// Cart.propTypes = {
//   cart: PropTypes.exact({
//       username: PropTypes.string,
//       tag: PropTypes.string,
//       location: PropTypes.string,
//       avatar: PropTypes.string,
//   })
// }