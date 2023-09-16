import { useCallback, useEffect, useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';
import { outdoorsyAPI } from '../services/outdoorsyService';
import { Rental } from '../types/interfaces';

export const useFetchRentals = (
    location: string,
    initialSearch: string = '',
    initialLimit: number = 5,
    initialOffset: number = 0
) => {
    const [rentals, setRentals] = useState<Rental[]>([]);
    const [keyword, setKeyword] = useState(initialSearch);
    const [isLoading, setIsLoading] = useState(false);
    const [offset, setOffset] = useState(initialOffset);
    const [allResultsAreLoaded, setAllResultsAreLoaded] = useState(true);

    const debouncedKeyword = useDebounce(keyword);

    const outdoorsyAPIEndpoint = location == 'default'
        ? outdoorsyAPI.searchByKeyword
        : outdoorsyAPI.searchByKeywordFromLA;

    useEffect(() => {
        if (debouncedKeyword != '' && debouncedKeyword === keyword) {
            outdoorsyAPIEndpoint(debouncedKeyword, initialLimit, offset)
                .then((response) => {
                    if (response.length > 0) {
                        if (response.length < 5) {
                            setAllResultsAreLoaded(true);
                        } else {
                            setAllResultsAreLoaded(false);
                        }
                        setRentals((prevState) => [...prevState, ...response]);
                    }
                })
                .then(() => setIsLoading(false))
                .catch(err => {
                    console.log(err);
                    setOffset(0);
                    setRentals([]);
                });
        }
    }, [debouncedKeyword, location, offset, initialLimit, keyword, outdoorsyAPIEndpoint])

    const searchInputHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();
        const input = e.target.value;

        if (input.trim() != '') {
            setRentals([]);
            setOffset(0);
            setIsLoading(true);
            setKeyword(input);
            setAllResultsAreLoaded(true);
        } else {
            setIsLoading(false);
            setKeyword('');
            setAllResultsAreLoaded(true);
        }
    }, []);

    const loadMoreHandler = () => {
        setOffset(offset + initialLimit);
    }

    return {
        rentals,
        isLoading,
        keyword,
        allResultsAreLoaded,
        searchInputHandler,
        loadMoreHandler,
    };
};