import * as React from 'react';
import BoxedList from '@navikt/boxed-list';
import bem from '@navikt/bem-utils';
import { Normaltekst } from 'nav-frontend-typografi';
import './list.less';

interface ListItemProps {
    name: string;
    href: string;
}

interface BoxedListWithSelectionProps {
    items: ListItemProps[];
}

const listItemCls = bem('boxedList__selectItem');

const BoxedListWithSelection: React.FunctionComponent<
    BoxedListWithSelectionProps
> = ({ items }) => (
    <BoxedList>
        {items.map(({ name, href }) => (
            <li className={listItemCls.block} key={href}>
                <a href={href} className={listItemCls.element('anchor')}>
                    <Normaltekst>{name}</Normaltekst>
                </a>
            </li>
        ))}
    </BoxedList>
);

export default BoxedListWithSelection;
