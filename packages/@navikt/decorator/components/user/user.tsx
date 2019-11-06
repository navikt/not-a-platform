import * as React from 'react';
import './user.less';
import bem from '@navikt/bem-utils';

const userCls = bem('user');

interface UserInterface {
  name: string;
  unit?: string;
  isInteractive?: boolean;
  renderUserPopoverContent?: () => React.ReactNode;
}

const User: React.FunctionComponent<UserInterface> = ({ name, unit, isInteractive, renderUserPopoverContent }) => {
  const [isToggled, setIsToggled] = React.useState(false);

  const buttonClickHandler = (e: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }
    setIsToggled(!isToggled);
  };
  return (
    <>
      {isInteractive ? (
        <button onClick={buttonClickHandler} type="button" className={userCls.block}>
          <span className={userCls.element('name')}>{name}</span>
          {unit && <span className={userCls.element('unit')}>{unit}</span>}
        </button>
      ) : (
        <div className={userCls.block}>
          <p className={userCls.element('name')}>{name}</p>
          {unit && <p className={userCls.element('unit')}>{unit}</p>}
        </div>
      )}
      <div>{isToggled && renderUserPopoverContent()}</div>
    </>
  );
};

export default User;
