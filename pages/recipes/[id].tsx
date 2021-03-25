
import Link from 'next/link';
import type {GetServerSideProps, NextPage} from 'next'
import {getRecipe, Recipe} from '../../lib/recipe'

import {Container, Row, Col, Button, Navbar, FormControl, InputGroup, Card, Table} from 'react-bootstrap';
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
                        <>
                        <Card>
                        <Card.Img variant="top" src={recipe.image_url} />
                        <Card.Body>
                        <Card.Title>{recipe.title}</Card.Title>
                        <Card.Text>
                            {recipe.description}
                            <p><small>作者：{recipe.author.user_name}</small></p>
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
                        </>
                    )}
                    <h3>材料</h3>
                    <Table striped bordered hover  size="sm">
                        <thead>
                            <tr>
                                <th>材料</th>
                                <th>量</th>
                            </tr>
                        </thead>
                            
                        
                        <tbody>
                            {recipe.ingredients.map((ingredient,index) => (
                            <tr>
                                <td>{ingredient.name}</td>
                                <td>{ingredient.quantity}</td>
                            </tr>
                            ))}
                        
                        </tbody>
                    </Table>
                    <h4>手順</h4>
                    <Table striped bordered hover variant="dark" responsive="sm">
                        <thead>
                            <tr>
                                <th>順番</th>
                                <th>手順</th>
                            </tr>
                        </thead>
                            
                        
                        <tbody>
                            {recipe.steps.map((step,index) => (
                            <tr>
                                <td>{index+1}</td>
                                <td>{step}</td>
                            </tr>
                            ))}
                        
                        </tbody>
                    </Table>
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