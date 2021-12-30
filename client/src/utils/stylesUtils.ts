export enum ModalPosition {
  PREVIEW_SMALL = 'preview_small',
  DETAILS_SMALL = 'details_small',
  PREVIEW_BIG = 'preview_big',
  DETAILS_BIG = 'details_big',
  POP_UP_MOVIE_CARD_SMALL = 'pop_up_movie_card_small',
  POP_UP_MOVIE_CARD_BIG = 'pop_up_movie_card_big',
  COLOR_BTN_MOVIE_CARD = 'btn_color_movie_card',
  STYLE_ADD_MENU_BTN = 'style_add_menu_btn',
  STYLE_BTN_ICON = 'style_btn_icon',
  STYLE_BTN_MENU_TITLE = 'style_btn_menu_title',
  STYLE_ADD_TO_TITLE = 'style_add_to_title',
  STYLE_ADD_MENU_WRAPPER = 'style_add_menu_wrapper',
  STYLE_WATCH_LATER_TITLE = 'style_watch_later_title',
  STYLE_WATCH_LATER_BTN = 'style_watch_later_btn',
  STYLE_WATCH_TITLE = 'style_watch_title',
  STYLE_WATCH_LATER_INNER = 'style_watch_later_inner',
}

export const modalPosition = {
  [ModalPosition.PREVIEW_SMALL]: {
    left: '320px',
    bottom: '110px',
  },
  [ModalPosition.DETAILS_SMALL]: {
    right: '169px',
    bottom: '239px',
  },
  [ModalPosition.PREVIEW_BIG]: {
    left: '350px',
    bottom: '50px',
  },
  [ModalPosition.DETAILS_BIG]: {
    right: '169px',
    bottom: '-8px',
  },
  [ModalPosition.POP_UP_MOVIE_CARD_SMALL]: {
    right: '-66px',
    bottom: '42px',
  },
  [ModalPosition.POP_UP_MOVIE_CARD_BIG]: {
    right: '-99px',
    bottom: '42px',
  },
  [ModalPosition.COLOR_BTN_MOVIE_CARD]: {
    'background-color': 'rgba(208,241,255,0.45)',
    'font-size': '16px',
    padding: '10px',
    'border-radius': '5px',
    color: '#394C5D',
    '-webkit-backdrop-filter': 'blur(10px)',
    'backdrop-filter': 'blur(10)',

    '@media(max-width: 1200px)': {
      padding: '6px',
      'font-size': '10px',
    },
  },
  [ModalPosition.STYLE_ADD_MENU_BTN]: {
    'margin-top': '19px',
    padding: '5px 0',
    width: '84px',
  },
  [ModalPosition.STYLE_BTN_ICON]: {
    'font-size': '25px',
  },
  [ModalPosition.STYLE_BTN_MENU_TITLE]: {
    'margin-top': '2px',
    'font-size': '11px',
    'line-height': '17px',
  },
  [ModalPosition.STYLE_ADD_TO_TITLE]: {
    'font-size': '23px',
    'line-height': '17px',
    width: '100%',
    display: 'block',
    'text-align': 'center',
  },
  [ModalPosition.STYLE_ADD_MENU_WRAPPER]: {
    padding: '42px 39px',
    'border-radius': '12px',
    right: '32px',
    bottom: '34px',
  },
  [ModalPosition.STYLE_WATCH_LATER_TITLE]: {
    'font-size': '12px',
    'line-height': '14px',
  },
  [ModalPosition.STYLE_WATCH_LATER_BTN]: {
    'border-radius': '16px',
    padding: '11px 14px',
  },
  [ModalPosition.STYLE_WATCH_TITLE]: {
    'max-width': '177px',
    'padding-bottom': '12px',
    'font-size': '20px',
    'line-height': '25px',
    display: 'block',
    'text-align': 'center',
  },
  [ModalPosition.STYLE_WATCH_LATER_INNER]: {
    right: '33px',
    bottom: '36px',
    'border-radius': '10px',
    width: '224px',
    height: '319px',
  },
};
