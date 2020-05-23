/**
 * In a real life scenerio, we would have an ORM managed model (or self managed model).
 * which of course connected to a db.
 */
import {categoryDBtable} from "./category.DBtable";


/** Async is not needed, but just for real life scenario **/
async function findAll() {
    return Object.values(categoryDBtable);
}

const CategoryModel = {
    findAll,
}

export default CategoryModel;
