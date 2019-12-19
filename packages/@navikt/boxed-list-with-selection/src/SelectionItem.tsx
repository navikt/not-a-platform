import bem from '@navikt/nap-bem-utils';
import { Normaltekst } from 'nav-frontend-typografi';
import * as React from 'react';
import { ListItemProps } from './BoxedListWithSelection';
import './list';

interface SelectionItemProps extends ListItemProps {
    index: number;
}

const boxedListWithSelectionItemCls = bem('boxedList__selectItem');

const SelectionItem = ({ name, href, selected, callback, index }: SelectionItemProps): JSX.Element => {
    const onClick = (): void => callback(index);
    return (
        <li
            className={
                selected
                    ? `${boxedListWithSelectionItemCls.block} ${boxedListWithSelectionItemCls.modifier('selected')}`
                    : boxedListWithSelectionItemCls.block
            }
        >
            {href ? (
                <a href={href} className={boxedListWithSelectionItemCls.element('anchor')} aria-current={selected}>
                    <Normaltekst>{name}</Normaltekst>
                </a>
            ) : (
                <button
                    className={boxedListWithSelectionItemCls.element('button')}
                    aria-current={selected}
                    type="button"
                    onClick={onClick}
                >
                    <Normaltekst tag="span">{name}</Normaltekst>
                </button>
            )}
        </li>
    );
};

export default SelectionItem;
