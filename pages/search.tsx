import { GetServerSideProps, NextPage } from "next";
import Link from 'next/link';
import {searchRecipes} from '../lib/recipe'
import { useRouter } from 'next/router';

import type {Recipe} from '../lib/recipe'

import {Container, Row, Col, Button, Navbar, FormControl, InputGroup, Card, Alert} from 'react-bootstrap';

type Props = {
    // このページで表示するレシピのリスト
    recipes: Recipe[];

    // レシピが一件以上検索でヒットしたか
    recipeFound: boolean;

    // 検索欄に入力されたキーワード
    keyword?: string;

    // ページネーション可能なとき、次のページに遷移するときに利用するパラメータを格納
    nextRecipeAPIParamsString?: string;

    // ページネーション可能なとき、前のページに遷移するときに利用するパラメータを格納
    prevRecipeAPIParamsString?: string;

    searchQuery?: string;

    message?: string;

    links: {
        prev?: string
        next?: string
    }
};

const TopPage: NextPage<Props> = (props) => {

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

    function getParam(name: string, url: string) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    function reverseString(st :string) {
        return st.split("").reverse().join("");
    }

    const onSearchClick = () => {
        const search = document.getElementById('search') as HTMLInputElement;
        if (search.value === ''){
            alert('文字を入力してください')
        } else {
            router.push({pathname:'/search',query: {keyword :search.value,page :1}});
        }
    }

    const GoToNextPage = () => {
        let str = links.next as string ;
        
        str = reverseString(str);
        console.log(str)
        let num = '';
        if (str){
            for (let i=0;i<str.length;i++){
                if (str[i] === '='){
                    break
                }else{
                    num += str[i];
                }
            }
        
        num=reverseString(num)
        }
        var url = location.search;
        console.log(url)
        router.push({query: {keyword :getParam('keyword',location.href),page :Number(num)}})
        
    }

    const GoToPrevPage = () => {
        let str = links.prev as string ;
        if (getParam('page',location.href) === '2'){
            router.push({query: {keyword :getParam('keyword',location.href),page :1}})
        } else {
        str = reverseString(str);
        let num = '';
        if (str){
            for (let i=0;i<str.length;i++){
                if (str[i] === '='){
                    break
                }else{
                    num += str[i];
                }
            }
        num=reverseString(num)
        }
        var url = location.search;
        router.push({query: {keyword :getParam('keyword',location.href),page :Number(num)}})
        }
    }
    

    const {recipes, keyword , links} = props
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

            <h2>{keyword}の検索結果</h2>
            {props.recipeFound ? (
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
            ) : (
                <div>
                    <Alert variant='dark'>
                        該当するレシピは見つかりませんでした。
                    </Alert>
                </div>
            )}

            <Row>
            {links?.prev && <Col><Button onClick={GoToPrevPage} className='mb-3' >←前のページ</Button></Col>} 
            {links?.next && <Col><Button onClick={GoToNextPage} className='mb-3 text-center' >次のページ→</Button></Col>}
            </Row>
        </Container>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps<Props> = async (context: any) => {
    console.log(context.query.keyword)
    if (context.query.keyword){

            const response = await searchRecipes(context.query.keyword.toString(),context.query.page)
            console.log(context.query)
            console.log(response)
            if (response != null && response.message == 'Not Found'){
                return {
                    props: {
                        recipeFound: false,
                        keyword: context.query.keyword.toString()
                    } as Props,
                }
            }
            return {
                props: {
                    recipes: response?.recipes,
                    recipeFound: true,
                    links: response?.links,
                    keyword: context.query.keyword.toString()
                } as Props,
            };
    } else {
        return {
            props: {
                recipeFound: false,
            } as Props,
        }

    }

}

export default TopPage;