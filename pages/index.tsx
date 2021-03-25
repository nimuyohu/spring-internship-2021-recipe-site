import { GetServerSideProps, NextPage } from "next";
import { getRecipes, searchRecipes } from '../lib/recipe';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Header } from '../components/header'
import { Input } from '../components/input'

import type { Recipe } from '../lib/recipe'

import {Container, Row, Col, Button, Card} from 'react-bootstrap';



type Props = {
    // このページで表示するレシピのリスト
    recipes: Recipe[];

    // 検索欄に入力されたキーワード
    keyword?: string;

    searchQuery?: string;

    message?: string;

    links: {
        prev?: string
        next?: string
    }
};



const TopPage: NextPage<Props> = (props) => {

    const router = useRouter();

    function getParam(name: string, url: string) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    const GoToPrevPage = () => {
        let paramsString = links.prev;
        if (paramsString === 'https://internship-recipe-api.ckpd.co/recipes'){
            router.push({query: {page :1}})
        } else {
            let num = 0;
            num = Number(getParam('page',location.href)) + 1
            router.push({query: {page :num}})
        }
    }

    const GoToNextPage = () => {
        let paramsString = links.next;
        let searchParams = new URLSearchParams(paramsString);
        const pageNumber = searchParams.get('https://internship-recipe-api.ckpd.co/recipes?page')
            router.push({query: {page :pageNumber}})
    }

    const { recipes, links} = props;

    return (
        <div>
            <Header />
            <Container >
            <Input />
            <ul style={{padding: '0'}}>
                {recipes.map((recipe,index) => (
                    <li style={{listStyle: 'none'}} key={index} className='mb-3'>
                        <Row>
                            <Col >
                                <Card>
                                {recipe.image_url ? (
                                    <Link href={`recipes/${recipe.id}`}>
                                        <Card.Img variant="top" src={recipe.image_url} />
                                    </Link>
                                    ) : (
                                        <Link href={`recipes/${recipe.id}`}>
                                                <Card.Img variant="top" src='/images/noimage.png' />
                                        </Link>
                                        )}
                                <Card.Body>
                                    <Link href={`recipes/${recipe.id}`}>
                                        <Card.Title>{recipe.title}</Card.Title>
                                    </Link>
                                    <Card.Text>
                                    {recipe.description}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">{recipe.published_at}</small>
                                </Card.Footer>
                                </Card>
                            </Col>
                        </Row>
                    </li>
                ))}
            </ul>

            <Row>
            {links?.prev && <Col><Button onClick={GoToPrevPage} className='mb-3' >←前のページ</Button></Col>} 
            {links?.next && <Col><Button onClick={GoToNextPage} className='mb-3 text-center' >次のページ→</Button></Col>}
            </Row>
            </Container>
        </div>
    )
};

export const getServerSideProps = async (context: any) => {
    if (context.resolvedUrl === '/'){
        const response = await getRecipes(1);
        return {
            props: {
            recipes: response?.recipes,
            links: response?.links
            }
        };
    } else {
        const response = await getRecipes(context.query.page);
        if (response != null && response?.links.next){
            const res = await fetch(response.links.next, {
                headers: { 'X-Api-Key': process.env.API_KEY as string }
            })
        const resJson = await res.json()

        // もし、次のページがNot Founの時は、nextのリンクを渡さない
        if (resJson.message === 'Not Found'){
            return {
                props: {
                recipes: response?.recipes,
                links: {
                    prev: response?.links.prev
                }
                },
            };
        } else {
        return {
            props: {
            recipes: response?.recipes,
            links: response?.links
            },
        };
    }
    }
    }
};

export default TopPage;