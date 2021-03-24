import { NextPage } from "next";
import { getRecipes, searchRecipes } from '../lib/recipe';
import Link from 'next/link';
import { useRouter } from 'next/router';

import type { Recipe } from '../lib/recipe'



type Props = {
    // このページで表示するレシピのリスト
    recipes: Recipe[];

    searchQuery?: string;

    links: {
        prev?: string
        next?: string
    }
}



const TopPage: NextPage<Props> = (props) => {

    // console.log(props.recipes)

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

    const GoToPrevPage = () => {
        console.log(links.prev)
        let paramsString = links.prev;
        if (paramsString === 'https://internship-recipe-api.ckpd.co/recipes'){
            router.push({query: {page :1}})
        } else {
            let searchParams = new URLSearchParams(paramsString);
            console.log(searchParams)
            // alert(searchParams.get('page'))
            const pageNumber = searchParams.get('https://internship-recipe-api.ckpd.co/recipes?page')
            router.push({query: {page :pageNumber}})
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
            <h1>レシピサイト</h1>

            <input
                id='search'
                type="search"
                name="search"
                placeholder="検索"
                onKeyPress={onSearchSubmitted}
            />
            <button>
                🔎
            </button>

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
            {links?.prev && <button onClick={GoToPrevPage}>←前のページ</button>} 
            {links?.next && <button onClick={GoToNextPage}>次のページ→</button>}
            
        </div>
    )
};

export const getServerSideProps = async (context: any) => {
    // console.log(context)
    if (context.resolvedUrl === '/'){
        const recipes = await getRecipes(1);
        return {
            props: {
            recipes: recipes.recipes,
            links: recipes.links
            },
        };
    } else {
        const recipes = await getRecipes(context.query.page);
        const res = await fetch(recipes.links.next, {
            headers: { 'X-Api-Key': process.env.API_KEY as string }
        })
        const resJson = await res.json()
        if (resJson.message === 'Not Found'){
            return {
                props: {
                recipes: recipes.recipes,
                links: {
                    prev: recipes.links.prev
                }
                },
            };
        } else {
        return {
            props: {
            recipes: recipes.recipes,
            links: recipes.links
            },
        };
    }
    }
};

export default TopPage;