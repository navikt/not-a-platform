import * as React from 'react';
import './list';

interface ListItemProps {
    name: string;
    href: string;
    selected?: boolean;
}
interface BoxedListWithSelectionProps {
    items: ListItemProps[];
}
declare const BoxedListWithSelection: React.FunctionComponent<BoxedListWithSelectionProps>;
export default BoxedListWithSelection;
