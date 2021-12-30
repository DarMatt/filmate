import React, { useEffect, useState } from 'react';
import { WrapperContent } from '../../components/404Content/styles';
import Content404 from '../../components/404Content/content404';

type IPage404 = {
  waitBeforeShow: number;
};

export const Page404: React.FC<IPage404> = ({ waitBeforeShow }) => {
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    let timeToShowComponent: NodeJS.Timeout;
    if (waitBeforeShow) {
      timeToShowComponent = setTimeout(() => {
        setIsHidden(false);
      }, waitBeforeShow);
    }
    return () => {
      clearTimeout(timeToShowComponent);
    };
  }, [waitBeforeShow]);

  return (
    <WrapperContent isHidden={isHidden}>
      <Content404 />
    </WrapperContent>
  );
};
