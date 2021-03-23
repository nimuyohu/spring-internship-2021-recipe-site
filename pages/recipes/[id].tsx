import { FC } from 'react';

import Link from 'next/link';
import type {GetServerSideProps, NextPage} from 'next'
import {getRecipe, Recipe} from '../../lib/recipe'


type Props = {
    recipe: Recipe;
}

export const RecipePage: NextPage<Props> = (props) => {
    const { recipe } = props;

    return (
        <div>
            <Link href='/'>レシピサイト</Link>
            <h1>レシピページ</h1>
            {recipe && (
                <main>
                    {recipe.image_url && (
                        <img src={recipe.image_url} alt={recipe.title} width={500} />
                    )}
                    <h3>{recipe.title}</h3>
                    <h4>{recipe.published_at}</h4>
                    <h3>材料</h3>
                    <ul>
                        {recipe.ingredients.map((ingredient,index) => (
                            <li key={index}>{ingredient.name}:{ingredient.quantity}</li>
                        ))}
                    </ul>
                    <h3>手順</h3>
                    <ol>
                        {recipe.steps.map((step,index) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ol>
                </main>
            )}

        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

    const id = Number(context.params?.id)

    if (id === 0 || isNaN(id)){
        return {
            notFound: true
        }
        
    } else {
        const recipe = await getRecipe(id);

        return {
            props: {
                recipe: recipe,
            },
        };

    }
}

export default RecipePage;