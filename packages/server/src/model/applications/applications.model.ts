/**
 * In a real life scenerio, we would have an ORM managed model (or self managed model).
 * which of course connected to a db.
 */

import {applicationsDBtable} from "./applications.DBtable";

/** Async is not needed, but just for real life scenario **/
async function findAll() {
    return Object.values(applicationsDBtable);
}

const ApplicationsModel = {
    findAll,
}

export default ApplicationsModel;
