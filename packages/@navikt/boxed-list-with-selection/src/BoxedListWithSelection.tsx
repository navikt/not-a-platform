import * as React from 'react';
import BoxedList from '@navikt/boxed-list';
import bem from '@navikt/nap-bem-utils';
import { Normaltekst } from 'nav-frontend-typografi';
import './list';

interface ListItemProps {
    name: string;
    href?: string;
    selected?: boolean;
}

interface BoxedListWithSelectionProps {
    items: ListItemProps[];
    onClick?: (index: number) => void;
}

const boxedListWithSelectionItemCls = bem('boxedList__selectItem');

const BoxedListWithSelection: React.FunctionComponent<BoxedListWithSelectionProps> = ({ items, onClick }) => (
    <BoxedList>
        {items.map(({ name, href, selected }, index) => (
            <li
                className={
                    selected
                        ? `${boxedListWithSelectionItemCls.block} ${boxedListWithSelectionItemCls.modifier('selected')}`
                        : boxedListWithSelectionItemCls.block
                }
                key={`${name}_${index}`}
            >
                {href ? (
                    <a
                        href={href}
                        className={boxedListWithSelectionItemCls.element('anchor')}
                        aria-current={selected}
                        onClick={onClick ? (): void => onClick(index) : undefined}
                    >
                        <Normaltekst>{name}</Normaltekst>
                    </a>
                ) : (
                    <button
                        className={boxedListWithSelectionItemCls.element('button')}
                        aria-current={selected}
                        type="button"
                        onClick={(): void => onClick(index)}
                    >
                        <Normaltekst tag="span">{name}</Normaltekst>
                    </button>
                )}
            </li>
        ))}
    </BoxedList>
);

export default BoxedListWithSelection;
