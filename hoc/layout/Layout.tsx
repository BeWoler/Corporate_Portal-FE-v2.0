import { FC, Fragment } from 'react';
import { ILayout } from './interfaces/layout.interface';

const Layout: FC<ILayout> = ({ children }: ILayout) => {
  return (
    <Fragment>
      {children}
    </Fragment>
  );
};

export default Layout;