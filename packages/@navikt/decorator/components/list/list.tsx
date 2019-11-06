import bem from '@navikt/bem-utils';
import { Normaltekst } from 'nav-frontend-typografi';
import * as React from 'react';
import './list.less';

const listCls = bem('list');

interface ListItem {
  itemName: string;
  itemHref: string;
}

interface ListInterface {
  listItems: ListItem[];
}

// temporarily using index to set selected in order to see styling
const List: React.FunctionComponent<ListInterface> = ({ listItems }) => (
  <ul className={listCls.block}>
    {listItems.map((item, index) => (
      <li className={listCls.element('item', index === 0 ? 'selected' : '')} key={item.itemHref}>
        <a href={item.itemHref} className={listCls.element('anchor')}>
          <Normaltekst>{item.itemName}</Normaltekst>
        </a>
      </li>
    ))}
  </ul>
);

export default List;
