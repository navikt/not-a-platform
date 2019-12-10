import bem from '@navikt/nap-bem-utils';
import * as React from 'react';
import ClipboardIcon from './ClipboardIcon';
import './ClipboardStyles';
import copyContentsToClipboard from './util';

const animation = {
    initial: { y: 5, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 5, opacity: 0 },
    transition: {
        duration: 0.1,
    },
};

interface ClipboardProps {
    children: React.ReactNode;
    buttonLabel?: string;
}

const clipboardCls = bem('clipboard');

const Clipboard = ({ children, buttonLabel = 'Kopier' }: ClipboardProps): JSX.Element => {
    const [didCopy, setDidCopy] = React.useState(false);
    const [shouldAnimate, setShouldAnimate] = React.useState(false);
    const ref = React.useRef<HTMLDivElement>();

    const copy = (): void => {
        if (!didCopy) {
            setDidCopy(copyContentsToClipboard(ref.current.firstChild));
            setShouldAnimate(true);
        }
    };

    React.useEffect(() => {
        if (didCopy) {
            setTimeout(() => setDidCopy(false), 2000);
        }
    }, [didCopy]);

    return (
        <div className={clipboardCls.block}>
            <div ref={ref}>{children}</div>
            <button
                data-tooltip={didCopy ? 'Kopiert!' : 'Kopier'}
                data-tip-disable={!didCopy}
                onClick={copy}
                data-class="typo-undertekst"
                type="button"
                aria-label={buttonLabel}
                className={clipboardCls.element('button')}
            >
                <span className={shouldAnimate ? clipboardCls.element('animate') : ''} key={didCopy ? 'check' : 'copy'}>
                    <ClipboardIcon type={didCopy ? 'check' : 'copy'} size={24} />
                </span>
            </button>
            {didCopy && (
                <span className={clipboardCls.element('kopiert')} aria-live="assertive">
                    Kopiert!
                </span>
            )}
        </div>
    );
};

export default Clipboard;
