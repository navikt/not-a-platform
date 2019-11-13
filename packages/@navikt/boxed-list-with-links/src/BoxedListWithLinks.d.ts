import * as React from 'react';
import './list';

interface ListItemProps {
    /** Display name for link */
    name: string;
    /** Url for link */
    href: string;
    /** Is this an external url? */
    isExternal?: boolean;
}
interface BoxedListWithLinksProps {
    /** Array of links */
    items?: ListItemProps[];
}
/** Bordered list with links */
export declare const BoxedListWithLinks: React.FunctionComponent<BoxedListWithLinksProps>;
export default BoxedListWithLinks;
