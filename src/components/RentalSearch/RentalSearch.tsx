import styles from "./RentalSearch.module.scss"
import RentalSearchResults from "./modules/RentalSearchResults/RentalSearchResults";
import LoadingSpinner from "../common/LoadingSpinner/LoadingSpinner";
import { RentalSearchLocationProps } from "./types/interfaces";
import { useFetchRentals } from "../../hooks/useFetchRentals";

const RentalSearch: React.FC<RentalSearchLocationProps> = ({ location = 'default', search = '' }: RentalSearchLocationProps) => {
    const data = useFetchRentals(location, search);

    return (
        location != 'default'
            ? <RentalSearchResults keyword={data.keyword} data={data.rentals} />
            :
            <>
                <input
                    placeholder={'Type your rental search keywords here!'}
                    onChange={data.searchInputHandler}
                    className={styles.search}
                />
                {
                    data.isLoading
                        ? <LoadingSpinner />
                        : data.keyword != '' && <RentalSearchResults keyword={data.keyword} data={data.rentals} />
                }
                {
                    !data.allResultsAreLoaded
                    && <button
                        className={styles.button}
                        onClick={data.loadMoreHandler}
                    >
                        Load More
                    </button>
                }
            </>
    )
}

export default RentalSearch;