import {CatagoryRoutes} from "./category.route";
import {ApplicationRoutes} from "./application.route";

export function assignRoutes(app) {
    app.use("/categories", CatagoryRoutes);
    app.use("/applications", ApplicationRoutes);
}
