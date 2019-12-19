import BoxedList from '@navikt/boxed-list';
import * as React from 'react';
import SelectionItem from './SelectionItem';

export interface ListItemProps {
    name: string;
    href?: string;
    selected?: boolean;
    callback?: (index: number) => void;
}

interface BoxedListWithSelectionProps {
    items: ListItemProps[];
}

const BoxedListWithSelection: React.FunctionComponent<BoxedListWithSelectionProps> = ({ items }) => (
    <BoxedList>
        {items.map(({ name, href, selected, callback }, index) => {
            if (!href && !callback) {
                return null;
            }
            return (
                <SelectionItem
                    key={`${name}_${index}`}
                    name={name}
                    href={href}
                    selected={selected}
                    callback={callback}
                    index={index}
                />
            );
        })}
    </BoxedList>
);

export default BoxedListWithSelection;
