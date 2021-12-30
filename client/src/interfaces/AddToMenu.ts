import { UiSize } from '../enums/UiSize';
import { IMovieCard } from './movieCard';

export type Action = {
  id: string;
  title: string;
};
export type IBtnPropsConfig = {
  title: string;
  actions: Action[];
};

export interface IBtnProps {
  id?: string;
  title?: string;
  icon?: string;
  config?: IBtnPropsConfig;
}

export interface IAddToMenuProps {
  watchLaterTitleStyle?: {
    'font-size': string;
    'line-height': string;
  };
  watchLaterBtnStyle?: {
    'border-radius': string;
    padding: string;
  };
  watchTitleStyle?: {
    'max-width': string;
    'padding-bottom': string;
    'font-size': string;
    'line-height': string;
    display: string;
    'text-align': string;
  };
  watchLaterInnerStyle?: {
    right: string;
    bottom: string;
    'border-radius': string;
    width: string;
    height: string;
  };
  addMenuWrapperStyle?: {
    padding: string;
    'border-radius': string;
    right: string;
    bottom: string;
  };
  addToTitleStyle?: {
    'font-size': string;
    'line-height': string;
    width: string;
    display: string;
    'text-align': string;
  };
  addMenuBtnStyle?: {
    'margin-top': string;
    padding: string;
    width: string;
  };
  btnIconStyle?: {
    'font-size': string;
  };
  btnMenuTitleStyle?: {
    'margin-top': string;
    'font-size': string;
    'line-height': string;
  };
  btnColor?: {
    'background-color'?: string;
    border?: string;
    'font-size'?: string;
    padding?: string;
    'border-radius'?: string;
    color?: string;
  };
  modalPositionSmall: {
    right?: string;
    left?: string;
    bottom: string;
  };
  modalPositionBig: {
    right?: string;
    left?: string;
    bottom: string;
  };
}
export interface IWatchLaterProps {
  onCloseWatchLModal: Function;
  onCloseAddToModal: Function;
  size: UiSize;
  cursorPosition: number;
  modalBtnWidth: number;
  config?: IBtnPropsConfig;
  position?: string;
  movie: IMovieCard;
}
