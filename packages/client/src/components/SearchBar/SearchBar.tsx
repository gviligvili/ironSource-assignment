import React, {useState} from 'react';
import useFetch from 'use-http'
import {Multiselect} from 'multiselect-react-dropdown';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './SearchBar.css';
import Settings from "../../config/settings";

const CATEGORIES_URL = `${Settings.get().BASE_URL}/categories/`;
const RATING_OPTIONS = [1, 2, 3, 4, 5]

export interface SearchBarProps {
    onSearchSubmit?: ({rating, categories, birthDate}) => void
}

export default function SearchBar({onSearchSubmit}: SearchBarProps) {
    const {loading, error, data: allCategories = []} = useFetch(CATEGORIES_URL, [])
    const selectCategoriesRef = React.useRef<Multiselect>()
    const selectRatingRef = React.useRef<Multiselect>()

    const [birthDate, setBirthdate] = useState(new Date('01-01-1994'));

    const submitClicked = () => {
        let rating = selectRatingRef.current.getSelectedItems()[0];
        let categories = selectCategoriesRef.current.getSelectedItems();

        if (onSearchSubmit) {
            onSearchSubmit({
                rating,
                categories,
                birthDate: birthDate.toISOString(),
            })
        }
    }

    return (
        <div>
            {error ?
                <div className="error">{error}</div>
                :
                (loading && !allCategories) ?
                    <div> loading </div> :
                    <div className="search-bar">
                        <div className="birthdate">
                            <h5>Birth date: </h5>
                            <DatePicker showMonthDropdown
                                        showYearDropdown
                                        dropdownMode="select"
                                        selected={birthDate} onChange={date => setBirthdate(date)}/>
                        </div>
                        <div className="rating">
                            <h5>Rating: </h5>
                            <Multiselect options={RATING_OPTIONS} selectedValues={[RATING_OPTIONS[2]]} isObject={false}
                                         singleSelect={true}
                                         ref={selectRatingRef}/>
                        </div>
                        <div className="categories">
                            <h5>Categories: </h5>
                            <Multiselect options={allCategories} isObject={false} selectionLimit="3"
                                         ref={selectCategoriesRef}/>
                        </div>
                    </div>
            }
            <div>
                <button onClick={submitClicked}>Get recommendations</button>
            </div>
        </div>
    )
}
