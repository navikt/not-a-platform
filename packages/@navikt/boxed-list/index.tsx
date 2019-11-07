import bem from '@navikt/bem-utils';
import * as React from 'react';
import './list.less';

const listCls = bem('boxedList');

interface BoxedListProps {
    children: React.ReactNode;
}

const BoxedList: React.FunctionComponent<BoxedListProps> = ({ children }) => (
    <ul className={listCls.block}>{children}</ul>
);

export default BoxedList;
