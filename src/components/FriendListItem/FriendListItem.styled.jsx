import styled from '@emotion/styled';

export const FriendsListItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 5px;
  width: 300px;
  background-color: #2c2929;
`;
export const Status = styled.span`
  position: absolute;
  padding: 7px;
  border-radius: 50%;
  left: 275px;
  bottom: 95px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  box-shadow: ${props => (props.isOnline ? '0px 0px 10px 1px green' : '0px 0px 10px 1px red')};
`;
export const Avatar = styled.img`
  border-radius: 5px;
`;
export const Name = styled.p`
  font-weight: 500;
  font-size: 20px;
  margin: 0 auto;
`;
