import { FC } from "react";
import { getRecipes } from '../lib/recipe';
import Link from 'next/link';

import type { Recipe } from '../lib/recipe'

type Props = {
    recipes: Recipe[];
}

const TopPage: FC<Props> = (props) => {
    const { recipes } = props;
    return (
        <div>
            <h1>レシピサイト</h1>
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

export const getStaticProps = async () => {
    const recipes = await getRecipes();
    return {
        props: {
        recipes: recipes,
        },
    };
};

export default TopPage;