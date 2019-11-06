import bem from '@navikt/bem-utils';
import { Normaltekst } from 'nav-frontend-typografi';
import * as React from 'react';
import './linkList.less';

const linkListCls = bem('linkList');

interface LinkListItem {
  itemName: string;
  itemHref: string;
  isExternal?: boolean;
}

interface ListInterface {
  listItems: LinkListItem[];
}

const LinkList: React.FunctionComponent<ListInterface> = ({ listItems }) => (
  <ul className={linkListCls.block}>
    {listItems.map(item => (
      <li className={linkListCls.element('item')} key={item.itemHref}>
        <a
          href={item.itemHref}
          className={linkListCls.element('anchor')}
          target={item.isExternal ? '_blank' : ''}
          rel={item.isExternal ? 'noopener' : ''}
        >
          <Normaltekst>{item.itemName}</Normaltekst>
        </a>
      </li>
    ))}
  </ul>
);

export default LinkList;
