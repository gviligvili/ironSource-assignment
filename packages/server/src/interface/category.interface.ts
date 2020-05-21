import CategoryModel from "../model/category/category.model";

export async function getAllCategories() {
    return CategoryModel.findAll();
}
