import {getApplications} from "../interface/application.interface";
import {GetApplicationsInput} from "../model/application/application.model";
import _ from "lodash";

export async function getApplicationsController(req, res) {
    let input: GetApplicationsInput;

    if (!_.isEmpty(req.query)) {
        const {categories, rating, birthdate} = req.query;

        input = {
            categories,
            rating,
            birthdate
        }
    }

    const applications = await getApplications(input)
    return res.json(applications);
}
