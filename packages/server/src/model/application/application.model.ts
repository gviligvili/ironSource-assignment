/**
 * In a real life scenerio, we would have an ORM managed model (or self managed model).
 * which of course connected to a db.
 */

import * as applicationDBtable from './applications.json';

/** Async is not needed, but just for real life scenario **/
async function findAll() {
    return Object.values(applicationDBtable);
}

const ApplicationModel = {
    findAll,
}

export default ApplicationModel;
