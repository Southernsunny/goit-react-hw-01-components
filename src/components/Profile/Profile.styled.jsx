import styled from '@emotion/styled';

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  background-color: black;
  width: 450px;
  border-radius: 20px;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 30px 0;
`;
export const Name = styled.p`
  font-weight: 600;
  font-size: 20px;
  text-transform: uppercase;
`;
export const Avatar = styled.img`
  border-radius: 50%;
`;
export const Tag = styled.p`
`;
export const Location = styled.p`
`;
export const Stats = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  background-color: #2c2929;
  width: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top: 1px solid white;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 25px;
  width: 150px;
  &:not(:first-of-type) {
    border-left: 1px solid white;
  }
`;
export const Label = styled.span`
  font-weight: 400;
  font-size: 14px;
`;
export const Quantity = styled.span`
  font-weight: 500;
  font-size: 18px;
`;
