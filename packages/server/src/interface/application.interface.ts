import ApplicationModel, {GetApplicationsInput} from "../model/application/application.model";
import _ from "lodash";

export async function getApplications(queryParams) {
    /**
     * In real life scenario, here is the place I would translate 'input' into
     * a query json, and use the model findAll(query) function.
     * (In case we don't use ORM, I would translate into a raw query)
     */
    let input: GetApplicationsInput;

    if (!_.isEmpty(queryParams)) {
        const {categories, rating, birthdate} = queryParams;

        input = {
            categories,
            rating,
            birthdate
        }
    }
    return ApplicationModel.findAll(input)
}
