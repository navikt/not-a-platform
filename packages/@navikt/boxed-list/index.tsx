import bem from '@navikt/bem-utils';
import * as React from 'react';
import './list.less';

const listCls = bem('boxedList');

interface BoxedListProps {
    children: React.ReactNode;
}

// temporarily using index to set selected in order to see styling
const BoxedList: React.FunctionComponent<BoxedListProps> = ({ children }) => (
    <ul className={listCls.block}>
        {children}
        {/*listItems.map((item, index) => (
            <li
                className={listCls.element(
                    'item',
                    index === 0 ? 'selected' : ''
                )}
                key={item.itemHref}
            >
                <a href={item.itemHref} className={listCls.element('anchor')}>
                    <Normaltekst>{item.itemName}</Normaltekst>
                </a>
            </li>
        ))*/}
    </ul>
);

export default BoxedList;
