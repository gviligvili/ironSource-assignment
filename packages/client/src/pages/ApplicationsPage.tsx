import React, {useState} from "react";
import './ApplicationsPage.css';
import Settings from "../config/settings";
import SearchBar, {SearchBarProps} from "../components/searchBar/SearchBar";

const APPLICATIONS_URL = `${Settings.get().BASE_URL}/instruments/`;

/** Smart component incharge of managing the instruments view */
export default function ApplicationsPage() {
    let [query, setQuery] = useState("");

    const onSearchSubmit = ({rating, categories, birthDate}) => {
        let queryString = `?birthdate=${birthDate}&rating=${rating}`
        categories.forEach(c => queryString+=`&categories=${c}`);
        setQuery(queryString);
    }

    return (
        <div className="applications-page">
            <SearchBar onSearchSubmit={onSearchSubmit}/>
        </div>
    );
}
