import * as React from 'react';
import BoxedList from '@navikt/boxed-list';
import bem from '@navikt/nap-bem-utils';
import { Normaltekst } from 'nav-frontend-typografi';
import './list';

interface ListItemProps {
    name: string;
    selected?: boolean;
}

interface BoxedListWithSelectionProps {
    items: ListItemProps[];
    onClick?: (index: number, e: React.SyntheticEvent) => void;
}

const boxedListWithSelectionItemCls = bem('boxedList__selectItem');

const BoxedListWithSelection: React.FunctionComponent<BoxedListWithSelectionProps> = ({ items, onClick }) => (
    <BoxedList>
        {items.map(({ name, selected }, index) => (
            <li
                className={
                    selected
                        ? `${boxedListWithSelectionItemCls.block} ${boxedListWithSelectionItemCls.modifier('selected')}`
                        : boxedListWithSelectionItemCls.block
                }
                key={`${name}_${index}`}
            >
                <button
                    className={boxedListWithSelectionItemCls.element('button')}
                    aria-current={selected}
                    type="button"
                    onClick={e => onClick(index, e)}
                >
                    <Normaltekst tag="span">{name}</Normaltekst>
                </button>
            </li>
        ))}
    </BoxedList>
);

export default BoxedListWithSelection;
