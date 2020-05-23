/**
 * In a real life scenerio, we would have an ORM managed model (or self managed model).
 * which of course connected to a db.
 */
import * as applicationDBtable from './applications.json';
import moment from 'moment';
import _ from 'lodash';

/**
 * ASSIGNMENT NOTE -
 * This function isn't for us to implement,
 * it's just to simulate a findAll against the db
 * btw - Async is not needed, but just for real life scenario
 **/
async function findAll(findQueryObj) {
    if(!_.isEmpty(findQueryObj)){
        return _internalSearchLikeDB(findQueryObj);
    }
    return Object.values(applicationDBtable);
}


/**
 * ASSIGNMENT NOTE - remember this is just a simulation of a query in the db.
 * it shouldn't exist, it's just because we working with in-memory mock.
 */
async function _internalSearchLikeDB(findQueryObj) {
    const allApplications = Object.values(applicationDBtable);
    const { categories, birthdate, rating } = findQueryObj;

    const userAge = moment().diff(birthdate, "year");
    return allApplications.filter((app) => {
            let isAboveRating = true;
            let isInCategory = true;
            let isAboveMinAge = true;

            // Only calculate them if given in the query,
            // otherwise don't consider them.
            if (rating) {
                isAboveRating = app.rating >= rating;
            }

            if (!_.isEmpty(categories)) {
                isInCategory = categories.includes(app.category)
            }

            if (birthdate) {
                isAboveMinAge = userAge >= app.min_age;
            }

            return isAboveMinAge && isAboveRating && isInCategory
        })
        // Shuffle the results and take 3, as the design says.
        .sort(() => Math.random() - Math.random()).slice(0, 3)
}

const ApplicationModel = {
    findAll,
}

export default ApplicationModel;
