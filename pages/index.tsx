import { FC } from "react";
import { getRecipes } from '../lib/recipe';
import Link from 'next/link';

import type { Recipe } from '../lib/recipe'

type Props = {
    recipes: Recipe[];
}

const TopPage: FC<Props> = (props) => {
    const { recipes } = props;
    console.log(recipes)
    return (
        <div>
            <h1>レシピサイト</h1>
            <ul>
            {recipes.map((recipe) => (
                <li key={recipe.id}>
                    <Link href={`recipes/${recipe.id}`}>{recipe.title}</Link>
                    <p>{recipe.description}</p>
                </li>
            ))}
            </ul>
        </div>
    )
};

export const getStaticProps = async () => {
    const recipes = await getRecipes();
    console.log(recipes)
    return {
        props: {
        recipes: recipes,
        },
    };
};

export default TopPage;