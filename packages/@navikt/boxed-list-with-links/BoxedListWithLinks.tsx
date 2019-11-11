import bem from '@navikt/bem-utils';
import BoxedList from '@navikt/boxed-list';
import { Normaltekst } from 'nav-frontend-typografi';
import * as React from 'react';
import './list.less';

interface ListItemProps {
    /** Display name for link */
    name: string;
    /** Url for link */
    href: string;
    /** Is this an external url? */
    isExternal?: boolean;
}

interface BoxedListWithLinksProps {
    /** Array of links */
    items?: ListItemProps[];
}

const listItemCls = bem('boxedList__item');

/** Test */
export const BoxedListWithLinks: React.FunctionComponent<BoxedListWithLinksProps> = ({
    items,
}: BoxedListWithLinksProps) => (
  <BoxedList>
    {items.map(({ name, href, isExternal }) => (
      <li className={listItemCls.block} key={href}>
        <a
          href={href}
          className={listItemCls.element('anchor')}
          target={isExternal ? '_blank' : ''}
          rel={isExternal ? 'noopener' : ''}
        >
          <Normaltekst>{name}</Normaltekst>
        </a>
      </li>
        ))}
  </BoxedList>
);

export default BoxedListWithLinks;
