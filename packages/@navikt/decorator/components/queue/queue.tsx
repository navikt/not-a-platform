import * as React from 'react';

import './queue.less';
import bem from '@navikt/bem-utils';

const queueCls = bem('queue');

interface QueueProps {
    href: string;
    numberOfQueuedTasks?: number;
}

const QueueSvg = () => (
    <svg width="24" height="17" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0 2h2V0H0v2zm.001 5h2V5h-2v2zm0 5h2v-2h-2v2zm0 5h2v-2h-2v2zM6.215 2h14.572C21.455 2 22 1.55 22 1s-.546-1-1.214-1H6.215c-.668 0-1.214.45-1.214 1 0 .551.548 1 1.214 1zm-.027 5h16.625c.654 0 1.188-.45 1.188-1s-.534-1-1.188-1H6.188c-.653 0-1.187.45-1.187 1s.536 1 1.187 1zm-.187 5h10c.55 0 1-.45 1-1s-.45-1-1-1h-10c-.55 0-1 .45-1 1s.451 1 1 1zm13.062 3H5.938c-.515 0-.937.45-.937 1s.422 1 .937 1h13.125c.516 0 .938-.45.938-1s-.422-1-.938-1z"
            fill="#FFF"
            fill-rule="evenodd"
        />
    </svg>
);

const Queue: React.FunctionComponent<QueueProps> = ({ href, numberOfQueuedTasks }) => (
    <div className={queueCls.block}>
        <a className={queueCls.element('anchor')} href={href}>
            <QueueSvg />
            <span className={queueCls.element('hidden-text')}>Søkeside</span>
            {numberOfQueuedTasks && (
                <span className={queueCls.element('tasks-counter')}>
                    {numberOfQueuedTasks} <span className={queueCls.element('hidden-text')}>reserverte oppgaver</span>
                </span>
            )}
        </a>
    </div>
);

export default Queue;
