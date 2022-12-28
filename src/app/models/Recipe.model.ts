interface IRecipe {
    fk_registered_user_id: number | null;
    title: string | null;
    description: string | null;
    ingredients: Array<string> | null;
    directions: string | null;
    last_modified: string | null;
    // add tags
}

export class Recipe implements IRecipe {
    fk_registered_user_id = 0;
    title = '';
    description = '';
    ingredients = new Array<string>;
    directions = '';
    last_modified = '';
}