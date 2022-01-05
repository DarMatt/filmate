import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/images/logo.svg';
import search from '../../assets/images/search.svg';
import chat from '../../assets/images/chat.svg';

interface OpenMenuType {
  line: boolean;
}

interface CrossType {
  arrow: boolean;
}

const cross: any = {
  position: 'absolute',
  display: 'flex',
  'flex-direction': 'column',
  'justify-content': 'center',
  'align-items': 'center',
  height: '100%',
  width: '100%',
  transform: 'rotate(45deg)',

  '> span': {
    display: 'block',
    background: 'hsl(0, 0%, 59%)',
    'border-radius': '2px',

    '&:nth-child(1)': {
      height: '0%',
      width: '2px',
      position: 'absolute',
      'transition-delay': '0s',
    },

    '&:nth-child(2)': {
      width: '0%',
      height: '2px',
      position: 'absolute',
      'transition-delay': '0s',
    },
  },
};

const burger: any = {
  position: 'absolute',
  display: 'flex',
  'flex-direction': 'column',
  'align-items': 'center',
  'justify-content': 'center',
  height: '100%',
  width: '100%',

  '> span': {
    display: 'block',
    background: 'hsl(0, 0%, 59%)',
    'border-radius': '2px',
    width: '25px',
    height: '2px',
    position: 'relative',
    margin: '3px 0',

    '&:nth-child(1)': {
      'transition-delay': '0.5s',
    },

    '&:nth-child(2)': {
      'transition-delay': '0.625s',
    },

    '&:nth-child(3)': {
      'transition-delay': '0.75s',
    },
  },
};

const openHamburger: any = {
  position: 'absolute',
  display: 'flex',
  'flex-direction': 'column',
  'align-items': 'center',
  'justify-content': 'center',
  height: '100%',
  width: '100%',

  '>span': {
    display: 'block',
    background: 'hsl(0, 0%, 59%)',
    'border-radius': '2px',
    width: '0%',

    '&:nth-child(1)': {
      'transition-delay': '0s',
    },

    '&:nth-child(2)': {
      'transition-delay': '0.125s',
    },

    '&:nth-child(3)': {
      'transition-delay': '0.25s',
    },
  },
};

const openCross: any = {
  position: 'absolute',
  display: 'flex',
  'flex-direction': 'column',
  'justify-content': 'center',
  'align-items': 'center',
  height: '100%',
  width: '100%',
  transform: 'rotate(45deg)',

  '>span': {
    display: 'block',
    background: 'hsl(0, 0%, 59%)',
    'border-radius': '2px',

    '&:nth-child(1)': {
      height: '80%',
      width: '2px',
      position: 'absolute',
      'transition-delay': '0.525s',
    },

    '&:nth-child(2)': {
      width: '80%',
      height: '2px',
      position: 'absolute',
      'transition-delay': '0.475s',
    },
  },
};

export const HeaderNavStyled = styled.header`
  position: sticky;
  padding: 0 45px;
  top: 0;
  z-index: 17;
  background-color: ${({ theme }) => theme.backgroundColors.mainColor};
  @media (max-width: 1200px) {
    padding: 0 25px;
  }

  @media (max-width: 475px) {
    padding: 0 10px;
  }
`;

export const FlexForHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 150px;
  background-color: ${({ theme }) => theme.backgroundColors.mainColor};

  @media (max-width: 1380px) {
    height: 115px;
  }
  @media (max-width: 1200px) {
    height: 90px;
  }
`;

export const LogoSearchInnerStyled = styled.div`
  display: flex;
  gap: 130px;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 1024px) {
    gap: 10px;
    width: 100%;
    justify-content: flex-end;
  }
`;

export const LogoStyled = styled.img.attrs<string>({
  src: logo,
})`
  position: relative;
  z-index: 5;
  width: 167px;
  height: 54px;

  @media (max-width: 1380px) {
    width: 157px;
    height: 50px;
  }
  @media (max-width: 1200px) {
    width: 147px;
    height: 45px;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const MenuToggleStyle = styled.div`
  position: absolute;
  top: -77px;
  right: -45px;
  display: none;
  width: 35px;
  height: 35px;
  cursor: pointer;
  border-radius: 15px;
  transition: margin-left 0.6s;
  margin-left: ${(props: { burger: string; burgerSmall: string }) => props.burger};

  @media (max-width: 1024px) {
    display: block;
  }

  @media (max-width: 350px) {
    margin-left: ${(props: { burger: string; burgerSmall: string }) => props.burgerSmall};
  }
`;

export const HamburgerStyle = styled.div<OpenMenuType>`
  ${(props) => (props.line ? openHamburger : burger)}
`;

export const CrossStyle = styled.div<CrossType>`
  ${(props) => (props.arrow ? openCross : cross)}
`;

export const SearchStyled = styled.input`
  width: 410px;
  height: 50px;
  padding-left: 60px;
  border-radius: 11px;
  background-image: url(${search});
  background-repeat: no-repeat;
  background-position: 10px;
  margin-right: 40px;
  outline: none;
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.textColors.searchColor};
  align-self: flex-end;
  text-transform: capitalize;

  &::placeholder {
    outline: none;
    font-size: 14px;
    line-height: 17px;
    color: rgba(0, 0, 0, 0.72);
  }

  @media (max-width: 1380px) {
    width: 370px;
    height: 45px;
  }

  @media (max-width: 1200px) {
    width: 320px;
    height: 40px;
  }

  @media (max-width: 768px) {
    position: absolute;
    z-index: -1;
    left: calc(50% - 160px);
    transition: transform 0.6s;
    transform: scale(${(props: { indent: boolean }) => (props.indent ? '100%' : '0')});
    transform-origin: center center;
    top: 100px;
    border: none;
    box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 348px) {
    width: 290px;
    margin-right: 10px;
    left: calc(50% - 145px);
  }
`;

export const SearchBtnStyle = styled.div`
  display: none;
  border-radius: 10px;
  width: 40px;
  height: 40px;
  border: 2px solid #2e2e2e;
  margin-right: 30px;

  @media (max-width: 768px) {
    display: block;
    background-image: url(${search});
    background-position: center;
    border: none;
  }

  @media (max-width: 475px) {
    margin-right: 10px;
  }

  @media (max-width: 369px) {
    width: 35px;
    height: 35px;
  }
`;

export const SignInBtnStyled = styled.button`
  width: 142px;
  height: 50px;
  border-radius: 10px;
  background: #2e2e2e;
  border: none;
  font-family: Montserrat;
  font-size: 18px;
  line-height: 22px;
  color: #fff;
  margin-right: 50px;
  margin-top: 3px;
  cursor: pointer;

  @media (max-width: 1380px) {
    width: 135px;
    height: 45px;
    margin-right: 0;
    margin-top: 1px;
  }
  @media (max-width: 1200px) {
    width: 120px;
    height: 40px;
    margin-top: 9px;
  }

  @media (max-width: 1024px) {
    margin-top: 0;
  }

  @media (max-width: 475px) {
    width: 50px;
    font-size: 12px;
    line-height: 14px;
  }

  @media (max-width: 369px) {
    height: 35px;
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  display: block;
  border-radius: 50%;
  margin: 0 55px 0 20px;
  cursor: pointer;
`;

export const UserImgStyled = styled.span`
  cursor: pointer;
  font-size: 70px;
  margin-left: 20px;
  @media (max-width: 1380px) {
    font-size: 60px;
  }
  @media (max-width: 557px) {
    font-size: 50px;
  }
`;

export const ChatIconStyle = styled.img.attrs({
  src: chat,
})`
  width: 50px;
  height: 50px;
  @media (max-width: 1380px) {
    width: 40px;
    height: 40px;
  }
  @media (max-width: 557px) {
    width: 35px;
    height: 35px;
  }
`;
