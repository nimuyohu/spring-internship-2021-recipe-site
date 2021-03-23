import { NextPage } from "next";
import { getRecipes, searchRecipes } from '../lib/recipe';
import Link from 'next/link';
import { useRouter } from 'next/router';

import type { Recipe } from '../lib/recipe'

type Props = {
    // このページで表示するレシピのリスト
    recipes: Recipe[];

    searchQuery?: string;
}


const TopPage: NextPage<Props> = (props) => {

    const router = useRouter();
    const onSearchSubmitted = (e: any) => {
        // エンターが押下されたとき検索を開始
        if (e.which == 13) {
            const search = document.getElementById('search') as HTMLInputElement;
            router.push({pathname:'/search',query: {keyword :search.value}});
        }
    };

    const { recipes } = props;

    return (
        <div>
            <h1>レシピサイト</h1>

            <input
                id='search'
                type="search"
                name="search"
                placeholder="検索"
                onKeyPress={onSearchSubmitted}
            />
            <button>
                🔎
            </button>

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
        </div>
    )
};

export const getServerSideProps = async () => {
    const recipes = await getRecipes();
    // const foo = await searchRecipes();
    // console.log(foo)
    return {
        props: {
        recipes: recipes,
        },
    };
};

export default TopPage;