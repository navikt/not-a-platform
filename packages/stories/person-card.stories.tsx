import * as React from 'react';
import PersonCard from '../@navikt/person-card/src/index';

export default { title: '@navikt/nap-person-card' };

export const StateFromProps = (): JSX.Element => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    return (
        <PersonCard
            personCardData={[
                {
                    name: 'Test Personsen',
                    gender: 'female',
                    fodselsnummer: '12345612345',
                },
                {
                    name: 'Pest Tersonsen',
                    gender: 'male',
                    fodselsnummer: '12345612346',
                },
            ]}
            onClick={(index: number): void => {
                setActiveIndex(index);
            }}
            activeIndex={activeIndex}
        />
    );
};
