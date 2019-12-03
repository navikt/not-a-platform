import bem from '@navikt/nap-bem-utils';
import * as React from 'react';
import './indexStyles';
import Card from './Card';

const personCardCls = bem('person-card');

type Gender = 'male' | 'female';

interface PersonCardData {
    name: string;
    fodselsnummer: string;
    gender: Gender;
}

interface PersonCardProps {
    personCardData: PersonCardData[];
    onClick: (index: number) => void;
    activeIndex?: number;
}

const PersonCard = ({ personCardData, onClick, activeIndex }: PersonCardProps): JSX.Element => {
    return (
        <div className={personCardCls.block}>
            {personCardData.map((personCard, index) => (
                <Card
                    key={personCard.fodselsnummer}
                    index={index}
                    onClick={onClick}
                    isActive={activeIndex === index}
                    {...personCard}
                />
            ))}
        </div>
    );
};
export default PersonCard;
