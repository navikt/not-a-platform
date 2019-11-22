import * as React from 'react';
import BoxedList from '@navikt/boxed-list';
import bem from '@navikt/nap-bem-utils';
import { Normaltekst } from 'nav-frontend-typografi';
import './list';

interface ListItemProps {
    name: string;
    href: string;
    selected?: boolean;
}

interface BoxedListWithSelectionProps {
    items: ListItemProps[];
}

const boxedListWithSelectionItemCls = bem('boxedList__selectItem');

const BoxedListWithSelection: React.FunctionComponent<BoxedListWithSelectionProps> = ({ items }) => (
    <BoxedList>
        {items.map(({ name, href, selected }) => (
            <li
                className={
                    selected
                        ? boxedListWithSelectionItemCls.blockModifier('selected')
                        : boxedListWithSelectionItemCls.block
                }
                key={href}
            >
                <a href={href} className={boxedListWithSelectionItemCls.element('anchor')} aria-current={selected}>
                    <Normaltekst>{name}</Normaltekst>
                </a>
            </li>
        ))}
    </BoxedList>
);

export default BoxedListWithSelection;
