import styled from 'styled-components';

export const S: any = {};

S.PaginationWrapper = styled.section`
  display: flex;
  width: 100%;
  justify-content: ${(props: { display: string }) => props.display};
  margin-top: 55px;

  @media (max-width: 1386px) {
    margin-top: 25px;
  }
`;

S.ArrowLeftBtn = styled.button`
  border: none;
  margin-right: 20px;
  background: transparent;
  cursor: ${(props: { disable: boolean }) => (props.disable ? 'not-allowed' : 'pointer')};

  > span {
    color: ${({ theme }) => theme.textColors.arrowColor};
    font-size: 35px;
    pointer-events: ${(props: { disable: boolean }) => (props.disable ? 'none' : 'auto')};

    @media (max-width: 1386px) {
      font-size: 25px;
    }

    @media (max-width: 510px) {
      font-size: 18px;
    }
  }
`;

S.PagesNumberInner = styled.div``;

S.PagesNumber = styled.button`
  border: none;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 29px;
  margin-left: 20px;
  background: transparent;
  //props.theme.textColors.numberColor
  border-bottom: ${(props: { isActive: boolean }) => (props.isActive ? '3px solid red' : 'none')};
  color: ${(props: { isActive: boolean; theme: any }) =>
    props.isActive ? props.theme.textColors.numberActiveColor : props.theme.textColors.numberColor};
  transform: scale(${(props: { isActive: boolean }) => (props.isActive ? '1.2' : '1')});

  @media (max-width: 1386px) {
    font-size: 20px;
    line-height: 24px;
  }

  @media (max-width: 510px) {
    font-size: 18px;
    line-height: 20px;
  }
`;

S.ArrowRightBtn = styled.button`
  border: none;
  margin-left: 40px;
  cursor: pointer;
  background: transparent;
  transition: transform 0.6s;
  cursor: ${(props: { disable: boolean }) => (props.disable ? 'not-allowed' : 'pointer')};

  > span {
    color: ${({ theme }) => theme.textColors.arrowColor};
    font-size: 35px;
    pointer-events: ${(props: { disable: boolean }) => (props.disable ? 'none' : 'auto')};

    @media (max-width: 1386px) {
      font-size: 25px;
    }

    @media (max-width: 510px) {
      font-size: 18px;
    }
  }

  &:hover {
    transform: scale(1.15);
    color: #000;
  }
`;

S.EllipBtn = styled.button`
  color: ${({ theme }) => theme.textColors.arrowColor};
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 18px;
  cursor: pointer;
`;
