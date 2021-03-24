
import Link from 'next/link';
import type {GetServerSideProps, NextPage} from 'next'
import {getRecipe, Recipe} from '../../lib/recipe'

import {Container, Row, Col, Button, Navbar, FormControl, InputGroup, Card} from 'react-bootstrap';


type Props = {
    recipe: Recipe;
}

export const RecipePage: NextPage<Props> = (props) => {
    const { recipe } = props;

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Link href='/'><Navbar.Brand href="/">レシピサイト🍳~料理が楽しい生活を~</Navbar.Brand></Link>
            </Navbar>

            <Container >

            {recipe && (
                <main>
                    {recipe.image_url && (
                        <img src={recipe.image_url} alt={recipe.title} width={100} />
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

            </Container>
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