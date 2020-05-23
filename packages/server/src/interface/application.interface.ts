import ApplicationModel from "../model/application/application.model";
import _ from "lodash";

export interface GetApplicationsInput {
    categories?: string[],
    birthdate?: string,
    rating?: number,
}

export async function getApplications(queryParams) {
    /**
     * ASSIGNMENT COMMENT:
     * In real life scenario, here is the place I would translate 'input' into
     * a query json, and use the model findAll(query) function.
     * (In case we don't use ORM, I would translate into a raw query)
     *
     * -! THIS IS THE ONLY PLACE that has know if a query
     * param has been added and what to do it with it in the query. !-
     */
    let input: GetApplicationsInput;

    if (!_.isEmpty(queryParams)) {
        const {categories, rating, birthdate} = queryParams;


        // only assign properties which are defined.
        // So if we had an orm, we could have defined here the conditions
        // for the "findAll" function
        input = {
            ...(categories ? { categories } : {}),
            ...(rating ? { rating } : {}),
            ...(birthdate ? { birthdate } : {}),
        }
    }

    return ApplicationModel.findAll(input)
}
