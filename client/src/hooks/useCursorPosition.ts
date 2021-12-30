export interface IPositionProps {
  left: number;
  right: number;
  top: number;
  bottom: number;
}

export const positionInitialState = {
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
};

export function getPosition(event: any) {
  const field = event.currentTarget.getBoundingClientRect();
  const element = event.target.toString().includes('Span') ? event.target.parentNode : event.target;

  const fieldBtn = element.getBoundingClientRect();
  const rightBtn = fieldBtn.right - event.clientX - 10;
  const topBtn = event.clientY - fieldBtn.top - 10;
  const left = event.clientX - field.left + rightBtn;
  const right = field.right - event.clientX;
  const top = event.clientY - field.top;
  const bottom = field.bottom - event.clientY + topBtn;

  return { left, right, top, bottom };
}

export const getElementWidth = (event: any) => {
  return event.currentTarget.offsetWidth;
};
