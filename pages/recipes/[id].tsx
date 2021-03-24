
import Link from 'next/link';
import type {GetServerSideProps, NextPage} from 'next'
import {getRecipe, Recipe} from '../../lib/recipe'

import {Container, Row, Col, Button, Navbar, FormControl, InputGroup, Card} from 'react-bootstrap';
import { useRouter } from 'next/router';


type Props = {
    recipe: Recipe;
}

export const RecipePage: NextPage<Props> = (props) => {
    const { recipe } = props;

    const router = useRouter();

    const onSearchSubmitted = (e: any) => {
        // エンターが押下されたとき検索を開始
        if (e.which == 13) {
            const search = document.getElementById('search') as HTMLInputElement;
            if (search.value === ''){
                alert('文字を入力してください')
            } else {
                router.push({pathname:'/search',query: {keyword :search.value,page :1}});
            }
        }
    };

    const onSearchClick = () => {
        const search = document.getElementById('search') as HTMLInputElement;
        if (search.value === ''){
            alert('文字を入力してください')
        } else {
            router.push({pathname:'/search',query: {keyword :search.value,page :1}});
        }
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Link href='/'><Navbar.Brand href="/">レシピサイト🍳~料理が楽しい生活を~</Navbar.Brand></Link>
            </Navbar>

            <Container >

            <InputGroup className="mb-3 mt-3" size="lg">
                <FormControl
                placeholder="料理を検索"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                size="lg"
                id='search'
                type="search"
                name="search"
                onKeyPress={onSearchSubmitted}
                />
                <InputGroup.Append>
                    <Button variant="outline-secondary" onClick={onSearchClick}>🔎</Button>
                </InputGroup.Append>
            </InputGroup>

            

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