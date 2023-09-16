import { useState, useCallback } from "react";
import { RentalSearchProps } from "../../../../types/interfaces";
import styles from './RentalSearchNoResults.module.scss'
import RentalSearch from "../../../../RentalSearch";

const RentalSearchNoResults: React.FC<RentalSearchProps> = ({ keyword }: RentalSearchProps) => {
    const [alternativeLocationSelected, setAlternativeLocationSelected] = useState(false);

    const reloadClickHandler = useCallback((): void => {
        alternativeLocationSelected
            ? setAlternativeLocationSelected(false)
            : setAlternativeLocationSelected(true);
    }, []);

    return (
        alternativeLocationSelected
            ? <RentalSearch location={'LA'} search={keyword} />
            : <article className={styles.noResults}>
                <h2>No results found for:
                    <span className={styles.keyword}>
                        {keyword}
                    </span>
                </h2>
                <button
                    className={styles.button}
                    onClick={reloadClickHandler}
                >
                    Try from LA location
                </button>
            </article >

    )
}

export default RentalSearchNoResults;