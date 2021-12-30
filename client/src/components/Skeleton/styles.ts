import styled, { keyframes } from 'styled-components';
import { TypeStyle } from '../../interfaces/styleType';

export const S: TypeStyle = {};

S.MovieSK = styled.div`
  display: grid;
  position: relative;
  border-radius: 10px 10px 0px 0px;
  width: 100%;
  animation: skeleton 0.5s ease infinite alternate;
  @keyframes skeleton {
    to {
      opacity: 0.3;
    }
  }
  @media (max-width: 850px) {
    width: 180px;
  }

  @media (max-width: 619px) {
    max-width: 250px;
    width: 100%;
    height: 350px;
  }

  @media (max-width: 457px) {
    height: 300px;
  }

  @media (max-width: 350px) {
    height: 250px;
  }
`;

S.MovieSKImg = styled.div`
  background-color: #dddddd85;
  width: 100%;
  height: 300px;
  border-radius: 10px 10px 0px 0px;
`;
S.MovieSKInfo = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 10px;
`;
S.MovieSKDetail = styled.div``;
S.MovieSKText = styled.div`
  height: 18px;
  width: 124px;
  background-color: #dddddd85;
`;
S.MovieSKRating = styled.div`
  margin-top: 10px;
  height: 13px;
  width: 50px;
  background-color: #dddddd85;
`;
S.MovieSKBtn = styled.div`
  margin-left: 90px;
  width: 35px;
  height: 35px;
  border-radius: 5px;
  background-color: #dddddd85;
`;

S.PreviewSKWrapper = styled.div`
  margin-left: -20px;
  height: 671px;
  display: flex;
  align-items: flex-end;
  background-color: #dddddd85;
  animation: skeleton 0.5s ease infinite alternate;
  @keyframes skeleton {
    to {
      opacity: 0.3;
    }
  }
  @media (max-width: 1380px) {
    height: 490px;
    padding: 0 15px;
  }
`;
S.PreviewSKContent = styled.div`
  padding: 0 0 50px 50px;
`;

S.PreviewSKTitle = styled.div`
  width: 400px;
  height: 45px;
  background-color: #31313138;
  @media (max-width: 1200px) {
    width: 370px;
    height: 38px;
  }
  @media (max-width: 560px) {
    width: 250px;
  }
`;
S.PreviewSKInner = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 50px;
  @media (max-width: 560px) {
    gap: 10px;
  }
`;
S.PreviewSKBtn = styled.div`
  width: ${(props: { sm: string }) => (props.sm ? '50px' : '175px')};
  height: 65px;
  background-color: #31313138;
  @media (max-width: 1200px) {
    width: ${(props: { sm: string }) => (props.sm ? '60px' : '145px')};
    height: 55px;
  }
  @media (max-width: 560px) {
    width: ${(props: { sm: string }) => (props.sm ? '55px' : '120px')};
    height: 45px;
  }
`;
