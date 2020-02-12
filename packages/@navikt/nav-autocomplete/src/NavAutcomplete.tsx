import * as React from 'react';
import './navAutcomplete.less';
import AutcompleteSuggestion from './AutcompleteSuggestion';
import { searchSuggestions, isIe } from './AutcompleteUtils';

interface Props {
    placeholder?: string;
    suggestions: Suggestion[];
    id: string;
    ariaLabel: string;
    onSelect: (value: Suggestion) => void;
    onReset?: () => void;
    feil?: string;
}

export interface Suggestion {
    key: string;
    value: string;
}

enum KEY {
    TAB = 9,
    ENTER = 13,
    ESC = 27,
    ARROW_UP = 38,
    ARROW_DOWN = 40,
}

export const NavAutocomplete: React.FC<Props> = ({
    placeholder,
    suggestions,
    ariaLabel,
    id,
    onSelect,
    onReset,
    feil,
}) => {
    const [inputValue, setInputValue] = React.useState<string>('');
    const [activeSuggestionIndex, setActiveSuggestionIndex] = React.useState(-1);
    const [blurDelay, setBlurDelay] = React.useState<NodeJS.Timeout | undefined>(null);
    const [shouldBlur, setShouldBlur] = React.useState<boolean | undefined>(true);
    const [hasFocus, setHasFocus] = React.useState<boolean | undefined>(false);
    const [ariaActiveDescendant, setAriaActiveDescendant] = React.useState<boolean | undefined>(false);
    const [shouldShowSuggestions, setShouldShowSuggestions] = React.useState<boolean | undefined>(true);

    /**
     * Vil skje hver gang man legger til eller fjerner en bokstav fra inputfeltet
     */
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setInputValue(value);
        setShouldShowSuggestions(true);
        if (value.length === 0 && onReset) {
            onReset();
        }
        const filteredSuggestions: Suggestion[] = searchSuggestions(suggestions, value);
        const activeFilteredSuggestion = filteredSuggestions.filter((item: Suggestion) => {
            if (item.key === (suggestions[activeSuggestionIndex] && suggestions[activeSuggestionIndex].key)) {
                return item;
            }
            return false;
        });
        if (activeFilteredSuggestion.length === 0) {
            setActiveSuggestionIndex(-1);
        }
    };

    const avoidBlur = (): void => {
        setShouldBlur(false);
    };

    const clearBlurDelay = (): void => {
        if (blurDelay) {
            clearTimeout(blurDelay);
            setBlurDelay(null);
        }
        setShouldBlur(true);
    };

    const setSuggestionIndex = (index: number): void => {
        setActiveSuggestionIndex(index);
        clearBlurDelay();
    };

    const onBlur = (): void => {
        const currentBlurDelay = setTimeout(() => {
            if (shouldBlur) {
                setHasFocus(false);
            }
        }, 10);
        setBlurDelay(currentBlurDelay);
    };

    const onFocus = (): void => {
        setHasFocus(true);
        setActiveSuggestionIndex(-1);
    };

    /**
     * Setter valgt forslag, og skjuler forslagslisten.
     * @param suggestionValue
     */
    const onClick = (suggestion: Suggestion | undefined): void => {
        if (suggestion) {
            setInputValue(suggestion.value);
            setShouldShowSuggestions(false);
            setActiveSuggestionIndex(-1);
            clearBlurDelay();
            onSelect(suggestion);
        }
    };

    const displayedSuggestions: Suggestion[] = searchSuggestions(suggestions, inputValue);

    const showSuggestions = hasFocus === true && shouldShowSuggestions && displayedSuggestions.length > 0;

    const activeDescendant =
        ariaActiveDescendant && activeSuggestionIndex > -1 ? `${id}-item-${activeSuggestionIndex}` : undefined;

    /**
     * Behandler tastaturnavigasjon i forslagslisten.
     * @param event
     */
    const onKeyDown = (event: React.KeyboardEvent) => {
        const hasSelectedSuggestion = activeSuggestionIndex > -1;

        /**
         * It’s important to only set aria-activedescendant after the Down arrow key is used to start traversing the
         * associated Listbox options, and to clear aria-activedescendant by removing the attribute or setting it to “”
         * every time the Left/Right arrow keys are pressed, as with Home/End, Escape, or when typing characters or
         * pasting content into the edit field. Otherwise the accessibility tree will report that focus is within the
         * Listbox and it will be impossible for screen reader users to review the text that has been typed into the
         * edit field.
         * https://www.levelaccess.com/differences-aria-1-0-1-1-changes-rolecombobox/
         */
        setAriaActiveDescendant(event.keyCode === KEY.ARROW_UP || event.keyCode === KEY.ARROW_DOWN);

        switch (event.keyCode) {
            case KEY.TAB:
                if (hasSelectedSuggestion && shouldShowSuggestions) {
                    setInputValue(displayedSuggestions[activeSuggestionIndex].value);
                    onClick(displayedSuggestions[activeSuggestionIndex]);
                }
                break;
            case KEY.ENTER:
                if (displayedSuggestions.length === 1) {
                    const updatedDisplayedSuggestions: Suggestion[] = searchSuggestions(suggestions, inputValue);
                    event.preventDefault(); // Unngå form submit når bruker velger et av forslagene
                    setInputValue(updatedDisplayedSuggestions[0].value);
                    onClick(updatedDisplayedSuggestions[0]);
                } else if (hasSelectedSuggestion && shouldShowSuggestions) {
                    const updatedDisplayedSuggestions: Suggestion[] = searchSuggestions(suggestions, inputValue);
                    event.preventDefault(); // Unngå form submit når bruker velger et av forslagene
                    setInputValue(updatedDisplayedSuggestions[activeSuggestionIndex].value);
                    onClick(updatedDisplayedSuggestions[activeSuggestionIndex]);
                } else {
                    setShouldShowSuggestions(false);
                }
                break;
            case KEY.ESC:
                // Hvis man trykker Esc, og forslagslisten er synlig, så skal listen skjules.
                // Hvis forslagslisten allerede er skjult, så vil verdien i
                // inputfeltet slettes (hvis dette er standard oppførsel i browseren).
                if (shouldShowSuggestions && suggestions.length > 0) {
                    setShouldShowSuggestions(false);
                    event.preventDefault(); // Unngå at verdi i inputfelt slettes
                }
                break;
            case KEY.ARROW_UP:
                if (shouldShowSuggestions) {
                    event.preventDefault();
                    // Marker forrige suggestion i listen.
                    // Hvis man er på toppen av listen og trykker pil opp, så skal ingen forslag markeres.
                    const oppdatertActiveSuggestionIndex =
                        activeSuggestionIndex - 1 === -2 ? -1 : activeSuggestionIndex - 1;
                    setActiveSuggestionIndex(oppdatertActiveSuggestionIndex);
                }
                break;
            case KEY.ARROW_DOWN:
                if (shouldShowSuggestions) {
                    event.preventDefault();
                    // Marker neste suggestion i listen, så fremst man ikke er på slutten av listen
                    const oppdatertActiveSuggestionIndex =
                        activeSuggestionIndex + 1 === suggestions.length
                            ? suggestions.length - 1
                            : activeSuggestionIndex + 1;
                    setActiveSuggestionIndex(oppdatertActiveSuggestionIndex);
                }
                break;
            default:
                break;
        }
    };

    return (
        <div
            className={`navAutocomplete ${isIe() && 'navAutocomplete__ie'}`}
            aria-owns={`${id}-suggestions`}
            aria-haspopup="listbox"
        >
            <input
                id={id}
                className={`typo-normal ${feil && feil.length > 0 ? 'navAutocomplete__input--harFeil' : ''}`}
                type="search"
                aria-label={ariaLabel}
                aria-autocomplete="list"
                aria-controls={`${id}-suggestions`}
                role="combobox"
                aria-expanded={showSuggestions}
                aria-activedescendant={activeDescendant}
                placeholder={placeholder || ''}
                value={inputValue}
                autoComplete="off"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(event)}
                onBlur={() => onBlur()}
                onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => onKeyDown(event)}
                onFocus={() => onFocus()}
            />
            <ul
                id={`${id}-suggestions`}
                role="listbox"
                className={showSuggestions ? 'navAutocomplete__suggestions' : 'navAutocomplete__suggestions--hidden'}
            >
                {showSuggestions &&
                    displayedSuggestions.map((suggestion: Suggestion, index: number) => (
                        <AutcompleteSuggestion
                            key={index}
                            id={id}
                            index={index}
                            suggestion={suggestion}
                            setSuggestionIndex={(idx: number) => setSuggestionIndex(idx)}
                            active={index === activeSuggestionIndex}
                            avoidBlur={() => avoidBlur()}
                            onClick={(value: Suggestion | undefined) => onClick(value)}
                        />
                    ))}
            </ul>
            {feil && <div className="skjemaelement__feilmelding">Feil</div>}
        </div>
    );
};

export default NavAutocomplete;
