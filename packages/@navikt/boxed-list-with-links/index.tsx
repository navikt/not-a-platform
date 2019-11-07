import * as React from 'react';
import BoxedList from '@navikt/boxed-list';
import bem from '@navikt/bem-utils';
import { Normaltekst } from 'nav-frontend-typografi';
import './list.less';

interface ListItemProps {
    name: string;
    href: string;
    isExternal?: boolean;
}

interface BoxedListWithLinksProps {
    items: ListItemProps[];
}

const listItemCls = bem('boxedList__item');

const BoxedListWithLinks: React.FunctionComponent<BoxedListWithLinksProps> = ({
    items,
}) => (
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
