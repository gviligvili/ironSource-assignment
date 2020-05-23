/**
 * In a real life scenerio, we would have an ORM managed model (or self managed model).
 * which of course connected to a db.
 */
import * as applicationDBtable from './applications.json';
import moment from 'moment';
import _ from 'lodash';

export interface GetApplicationsInput {
    categories: string[],
    birthdate: string,
    rating: number,
}

/**
 * all the filtering would occur as a query to the db,
 * and NOT hard coded js filtering.
 * An other point,
 * Async is not needed, but just for real life scenario
 **/
async function findAll(input: GetApplicationsInput) {
    if(!_.isEmpty(input)){
        return search(input);
    }
    return Object.values(applicationDBtable);
}


async function search(input: GetApplicationsInput) {
    const allApplications = Object.values(applicationDBtable);
    const { categories, birthdate, rating } = input;

    const userAge = moment().diff(birthdate, "year");
    return allApplications.filter((app) => {
            const isAboveRating = app.rating >= rating;
            const isAboveMinAge = userAge >= app.min_age;
            const isInCategory = categories.includes(app.category)
            return isAboveMinAge && isAboveRating && isInCategory
        })
        // Shuffle the results and take 3, as the design says.
        .sort(() => Math.random() - Math.random()).slice(0, 3)
}

const ApplicationModel = {
    findAll,
}

export default ApplicationModel;
