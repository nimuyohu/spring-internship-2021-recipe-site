
import Link from 'next/link';
import type {GetServerSideProps, NextPage} from 'next'
import {getRecipe, Recipe} from '../../lib/recipe'
import { Header } from '../../components/header'
import { Input } from '../../components/input'
import {Container, Card, Table} from 'react-bootstrap';
import Head from 'next/head';

type Props = {
    recipe: Recipe;
}

export const RecipePage: NextPage<Props> = (props) => {
    const { recipe } = props;

    return (
        <div>
            <Head>
                <title>{recipe.title}</title>
                <meta name="twitter:card" content="summary" />
                `<meta property="og:url" content={`https://spring-internship-2021-recipe-site-nimuyohu.vercel.app/${recipe.id}`} />
                <meta property="og:title" content={ recipe.title } />
                <meta property="og:description" content={ recipe.description } />
                {recipe.image_url ? 
                (
                <meta property="og:image" content={ recipe.image_url } />
                )
                :
                (
                <meta property="og:image" content={'https://3.bp.blogspot.com/-xiuGiiu17G8/VvpdptbU5PI/AAAAAAAA5Ro/wn_Nhl4mmdsMZymsGX4D5lKuANf8lrdww/s800/cooking_frypan_teflon.png'} />
                )}
            </Head>
            <Header />
            <Container >
            <Input />
            {recipe && (
                <main>
                    {recipe.image_url ? (
                        <>
                        <Card>
                            <Card.Img variant="top" src={recipe.image_url} />
                            <Card.Body>
                                <Card.Title>{recipe.title}</Card.Title>
                                <Card.Text>
                                    {recipe.description}
                                </Card.Text>
                                <Card.Text>
                                    <small>作者：{recipe.author.user_name}</small>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        </>
                    ) : (
                        <h3>{recipe.title}</h3>
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
                            <tr key={index}>
                                <td>{ingredient.name}</td>
                                <td>{ingredient.quantity}</td>
                            </tr>
                            ))}
                        </tbody>
                    </Table>

                    <h3>手順</h3>

                    <Table striped bordered hover variant="dark" responsive="sm">
                        <thead>
                            <tr>
                                <th>順番</th>
                                <th>手順</th>
                            </tr>
                        </thead>
                            
                        <tbody>
                            {recipe.steps.map((step,index) => (
                            <tr key={index}>
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