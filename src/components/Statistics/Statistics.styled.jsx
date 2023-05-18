import styled from '@emotion/styled';

export const Container = styled.section`
  margin: 30px auto;
  text-align: center;
  background-color: black;
  width: 450px;
  border-radius: 10px;
`;
export const Title = styled.h2`
  padding: 15px 0;
`;
export const StatList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  border-top: 1px solid white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 25px;
  width: 80px;
  &:not(:first-of-type) {
    border-left: 1px solid white;
  }
`;
export const Label = styled.span``;
export const Percentage = styled.span``;
