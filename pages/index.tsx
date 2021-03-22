import { FC } from "react";
import { getRecipes } from "../lib/recipe";

export const getStaticProps = async () => {
    const recipes = await getRecipes();
    console.log(recipes)
    return {
        props: {
        recipes: recipes,
        },
    };
};


const TopPage: FC = () => {
    return <h1>Hello Next!</h1>;
};

export default TopPage;