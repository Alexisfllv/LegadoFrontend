import httpCommon from "./http-common";

class CategoryService{

    getAllCategories(){
        return httpCommon.get("/categories");
    }
}

export default new CategoryService();