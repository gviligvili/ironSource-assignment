import {getApplications} from "../interface/application.interface";

export async function getApplicationsController(req, res) {
    const applications = await getApplications(req.query)
    return res.json(applications);
}
