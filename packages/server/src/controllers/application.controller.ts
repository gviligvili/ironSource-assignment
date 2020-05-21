import {getAllApplications} from "../interface/application.interface";

export async function getApplicationsController(req, res) {
    const applications = await getAllApplications()
    return res.json(applications);
}
