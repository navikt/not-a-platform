import bem from '@navikt/nap-bem-utils';
import * as React from 'react';
import './indexStyles';
import Card from './Card';

const personCardCls = bem('person-card');

export type Gender = 'male' | 'female' | 'unknown';

export interface PersonCardData {
    name: string;
    fodselsnummer: string;
    gender: Gender;
    url: string;
    isActive?: boolean;
    renderMenuContent: () => React.ReactNode;
}

interface PersonCardProps {
    personCardData: PersonCardData[];
}

const PersonCard = ({ personCardData }: PersonCardProps): JSX.Element => {
    return (
        <div className={personCardCls.block}>
            {personCardData.map(personCard => (
                <Card key={personCard.fodselsnummer} {...personCard} />
            ))}
        </div>
    );
};
export default PersonCard;
