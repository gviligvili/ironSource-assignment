import ApplicationModel, {GetApplicationsInput} from "../model/application/application.model";

export async function getApplications(input: GetApplicationsInput) {
    /**
     * In real life scenario, here is the place I would translate 'input' into
     * a query json, and use the model findAll(query) function.
     * (In case we don't use ORM, I would translate into a raw query)
     */
    return ApplicationModel.findAll(input)
}
