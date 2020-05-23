import React, {useState} from "react";
import './ApplicationsPage.css';
import Settings from "../config/settings";
import SearchBar from "../components/searchBar/SearchBar";
import useFetch, {CachePolicies} from "use-http/dist";
import ApplicationsTable from "../components/ApplicationsTable/ApplicationsTable";

const APPLICATIONS_URL = `${Settings.get().BASE_URL}/applications/`;

/** Smart component incharge of managing the instruments view */
export default function ApplicationsPage() {
    const { get, loading, error } = useFetch(APPLICATIONS_URL,{
        'cachePolicy': CachePolicies.NETWORK_ONLY
    })
    const [applications, setApplications] = useState([]);

    const onSearchSubmit = async({rating, categories, birthDate}) => {
        let queryString = `?birthdate=${birthDate}&rating=${rating}`
        categories.forEach(c => queryString+=`&categories[]=${c}`);
        const res = await get(queryString);
        setApplications(res);
    }

    return (
        <div className="applications-page">
            <SearchBar onSearchSubmit={onSearchSubmit}/>
            <br />
            <br />
            {error ?
                <div className="error">{error}</div>
                :
                (loading && !applications) ?
                    <div> loading </div> :
                    <ApplicationsTable applications={applications} />
            }
        </div>
    );
}
