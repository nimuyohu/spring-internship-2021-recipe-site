import { redirect } from "next/dist/next-server/server/api-utils";

export type Recipe = {
    // レシピID
    id: number;

    // レシピ名
    title: string;

    // レシピ概要
    description: string;

    // レシピ画像。画像がない場合は null。
    image_url: string | null;

    // レシピ作者
    author: {
        user_name: string;
    };

    // レシピを公開した日時。ISO 8601
    published_at: string;

    // レシピの手順
    steps: string[];

    // レシピの材料
    ingredients: {
        // 材料名
        name: string;
        // 分量（100g など）
        quantity: string;
    }[];

    // 関連するレシピのIDが最大5つ入っている。Poster View などを実装するのに使う。
    // なお、関連レシピの算出アルゴリズムのできが悪いため関連性が低い可能性がある点に注意。
    related_recipes: number[];

    message?: string;
};

export type QueryParameter = {
    // 検索キーワード。マルチバイト文字列の場合は URL Encode が必用。
    keyword: string;

    // ページネーションする場合に指定するページ番号
    page?: number;
};

export type Response = {
    // 検索にヒットしたレシピ一覧
    recipes: Recipe[];

    // ページネーション可能な場合の次、前のページのリンク
    links: {
        next?: string;
        prev?: string;
    };

    message?: string
}

export async function searchRecipes(keyword: string,page: number): Promise<Response | null> {
        keyword = encodeURIComponent(keyword)
        const res = await fetch(`https://internship-recipe-api.ckpd.co/search?keyword=${keyword}&page=${page}`, {
            headers: { 'X-Api-Key': process.env.API_KEY as string }
        });

        const recipes = await res.json();

        
        return recipes as Response;
        // if (res.ok){
        //     const recipes = await res.json();
        //     return recipes as Response;
        // } else {
        //     console.log('error')
        // }
        

    
    // const recipes = await res.json();
    // return recipes as Response;
}

export async function getRecipes(number: number): Promise<Response | null> {
    const res = await fetch(`https://internship-recipe-api.ckpd.co/recipes?page=${number}`, {
        headers: { 'X-Api-Key': process.env.API_KEY as string }
    });
    const recipes = await res.json();
    // console.log(recipes)
    return recipes as Response;
}

export async function getRecipe(id: number): Promise<Recipe | null> {
    const res = await fetch(`https://internship-recipe-api.ckpd.co/recipes?id=${id}`, {
        headers: { 'X-Api-Key': process.env.API_KEY as string }
    });


    const recipes = await res.json();
    // console.log(recipes)
    if (recipes.message && recipes.message === 'Not Found'){
        return recipes as Recipe;
    } else {
        return recipes.recipes[0] as Recipe;
    }
}