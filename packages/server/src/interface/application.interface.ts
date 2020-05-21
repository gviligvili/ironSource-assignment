import ApplicationModel from "../model/application/application.model";

export async function getAllApplications() {
    return ApplicationModel.findAll();
}
