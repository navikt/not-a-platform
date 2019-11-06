import * as React from 'react';
import { Sidetittel } from 'nav-frontend-typografi';
import bem from '@navikt/bem-utils';
import './decorator.less';
import User from './components/user/user';

interface DecoratorInterface {
  pageTitle: string;
  userName: string;
  userUnit: string;
  renderUserPopoverContent?: () => React.ReactNode;
  renderLinksPopoverContent?: () => React.ReactNode;
  loading?: boolean;
}

const decoratorCls = bem('decorator');
const Decorator: React.FunctionComponent<DecoratorInterface> = ({
  pageTitle,
  userName,
  userUnit,
  loading,
  renderUserPopoverContent,
  renderLinksPopoverContent,
}) => {
  return (
    <header className={decoratorCls.block}>
      <div className={decoratorCls.element('column')}>
        <Sidetittel className={decoratorCls.element('title')}>
          NAV
          <span className={decoratorCls.element('subtitle')}>{pageTitle}</span>
        </Sidetittel>
      </div>
      <div className={decoratorCls.element('column')}>
        {userName && (
          <User
            name={userName}
            unit={userUnit}
            isInteractive={!!renderUserPopoverContent}
            renderUserPopoverContent={renderUserPopoverContent}
          ></User>
        )}
      </div>
    </header>
  );
};

export default Decorator;
