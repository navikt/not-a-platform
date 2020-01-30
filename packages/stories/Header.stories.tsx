import * as React from 'react';
import Header from '../@navikt/header/src/index';
import Popover from '../@navikt/popover/src/popover';
import SystemButton from '../@navikt/system-button/src';
import BoxedListWithSelection from '../@navikt/boxed-list-with-selection/src/BoxedListWithSelection';
import UserPanel from '../@navikt/user-panel/src';

export default { title: '@navikt/nap-header' };

export const standard: React.FunctionComponent = () => {
    const [linkWindowOpen, setLinkWindowOpen] = React.useState(false);
    const [unitWindowOpen, setUnitWindowOpen] = React.useState(false);

    return (
        <Header title="Svangerskap og Fødsel" titleHref="https://nav.no">
            <Popover
                popperIsVisible={linkWindowOpen}
                renderArrowElement
                customPopperStyles={{ top: '8px', zIndex: 1 }}
                popperProps={{
                    children: () => (
                        <BoxedListWithSelection
                            items={[
                                { name: 'Test 1', href: 'nav.no' },
                                { name: 'Test 2', href: 'localhost:1234' },
                            ]}
                            onClick={() => {
                                setLinkWindowOpen(false);
                            }}
                        />
                    ),
                    placement: 'bottom-start',
                    positionFixed: true,
                }}
                referenceProps={{
                    children: ({ ref }) => (
                        <div ref={ref}>
                            <SystemButton
                                onClick={() => {
                                    if (unitWindowOpen) {
                                        setUnitWindowOpen(false);
                                    }
                                    setLinkWindowOpen(!linkWindowOpen);
                                }}
                                isToggled={linkWindowOpen}
                            />
                        </div>
                    ),
                }}
            />
            <Popover
                popperIsVisible={unitWindowOpen}
                customPopperStyles={{ top: '8px', zIndex: 1 }}
                renderArrowElement
                popperProps={{
                    children: () => (
                        <BoxedListWithSelection
                            items={[
                                {
                                    name: 'Test 1',
                                    href: 'nav.no',
                                    selected: true,
                                },
                                { name: 'Test 2', href: 'localhost:1234' },
                            ]}
                            onClick={() => {
                                setUnitWindowOpen(false);
                            }}
                        />
                    ),
                    placement: 'bottom-start',
                    positionFixed: true,
                }}
                referenceProps={{
                    children: ({ ref }) => (
                        <div ref={ref}>
                            <UserPanel
                                name="Bruk Brukersen"
                                unit="Enhet1"
                                onClick={() => {
                                    if (linkWindowOpen) {
                                        setLinkWindowOpen(false);
                                    }
                                    setUnitWindowOpen(!unitWindowOpen);
                                }}
                            />
                        </div>
                    ),
                }}
            />
        </Header>
    );
};
