import {getAllCategories} from "../interface/category.interface";

export async function getCategoriesController(req, res) {
    const categories = await getAllCategories()
    return res.json(categories);
}
