import { GetServerSideProps, NextPage } from "next";
import Link from 'next/link';
import {searchRecipes} from '../lib/recipe'
import { useRouter } from 'next/router';

import type {Recipe} from '../lib/recipe'

type Props = {
    // このページで表示するレシピのリスト
    recipes: Recipe[];

    // レシピが一件以上検索でヒットしたか
    recipeFound: boolean;

    // 検索欄に入力されたキーワード
    keyword?: string;

    // ページネーション可能なとき、次のページに遷移するときに利用するパラメータを格納
    nextRecipeAPIParamsString?: string;

    // ページネーション可能なとき、前のページに遷移するときに利用するパラメータを格納
    prevRecipeAPIParamsString?: string;

    searchQuery?: string;

    message?: string;
};

const TopPage: NextPage<Props> = (props) => {

    const router = useRouter();
    const onSearchSubmitted = (e: any) => {
        // エンターが押下されたとき検索を開始
        if (e.which == 13) {
            const search = document.getElementById('search') as HTMLInputElement;
            if (search.value === ''){
                alert('文字を入力してください')
            } else {
                router.push({pathname:'/search',query: {keyword :search.value}});
            }
        }
    };

    const {recipes} = props
    return (
        <div>
            <input
                id='search'
                type="search"
                name="search"
                onKeyPress={onSearchSubmitted}
                placeholder="検索"
            />
            <button>
                🔎
            </button>
            {props.recipeFound ? (
                <ul>
                {recipes.map((recipe) => (
                    <li key={recipe.id}>
                        {recipe.image_url &&
                        <Link href={`recipes/${recipe.id}`}>
                            <img src={recipe.image_url} alt={recipe.id.toString()} width='300'/>
                        </Link>
                        }
                        <Link href={`recipes/${recipe.id}`}>
                        <h2>{recipe.title}</h2>
                        </Link>
                        <p>{recipe.description}</p>
                    </li>
                ))}
                </ul>
            ) : (
                <div>
                    <h1 className="text-center m-2">
                        該当するレシピは見つかりませんでした。
                    </h1>
                </div>
            )}

            <h3>前のページ</h3>
            <h3>次のページ</h3>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    console.log(context.query.keyword)
    if (context.query.keyword){

            const response = await searchRecipes(context.query.keyword.toString())

            if (response.message == 'Not Found'){
                return {
                    props: {
                        recipeFound: false,
                    } as Props,
                }
            }

            return {
                props: {
                    recipes: response?.recipes,
                    recipeFound: true,
                } as Props,
            };
    } else {
        return {
            props: {
                recipeFound: false,
            } as Props,
        }

    }

}

export default TopPage;