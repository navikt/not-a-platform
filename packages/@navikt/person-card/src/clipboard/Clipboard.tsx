import { AnimatePresence, motion } from 'framer-motion';
import * as React from 'react';
import ReactTooltip from 'react-tooltip';
import './Clipboard.less';
import ClipboardIcon from './ClipboardIcon';
import copyContentsToClipboard from './util';

const animation = {
    initial: { y: 5, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 5, opacity: 0 },
    transition: {
        duration: 0.1,
    },
};

const Clipboard = ({ children }): JSX.Element => {
    const [didCopy, setDidCopy] = React.useState(false);
    const ref = React.useRef<HTMLDivElement>();

    const copy = (): void => {
        if (!didCopy) {
            setDidCopy(copyContentsToClipboard(ref.current.firstChild));
        }
    };

    React.useEffect(() => {
        if (didCopy) {
            setTimeout(() => setDidCopy(false), 2000);
        }
    }, [didCopy]);

    return (
        <div className="Clipboard">
            <div className="Clipboard__children" ref={ref}>
                {children}
            </div>
            <ReactTooltip place="bottom" disable={!didCopy} />
            <button
                data-tip="Kopiert!"
                data-tip-disable={!didCopy}
                onClick={copy}
                data-class="typo-undertekst"
                type="button"
            >
                <AnimatePresence initial={false} exitBeforeEnter>
                    <motion.div {...animation} key={didCopy ? 'check' : 'copy'}>
                        <ClipboardIcon type={didCopy ? 'check' : 'copy'} size={didCopy ? 20 : 24} />
                    </motion.div>
                </AnimatePresence>
            </button>
        </div>
    );
};

export default Clipboard;
