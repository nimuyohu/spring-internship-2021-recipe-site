import { GetServerSideProps, NextPage } from "next";
import Link from 'next/link';
import {searchRecipes} from '../lib/recipe'
import { useRouter } from 'next/router';

import type {Recipe} from '../lib/recipe'

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
            <input
                id='search'
                type="search"
                name="search"
                onKeyPress={onSearchSubmitted}
                placeholder="検索"
            />
            <button>
                🔎
            </button>
            <h1>{keyword}の検索結果</h1>
            {props.recipeFound ? (
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
            ) : (
                <div>
                    <h1 className="text-center m-2">
                        該当するレシピは見つかりませんでした。
                    </h1>
                </div>
            )}

        {links?.prev && <button onClick={GoToPrevPage}>←前のページ</button>} 
        {links?.next && <button onClick={GoToNextPage}>次のページ→</button>}
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
    console.log(context.query.keyword)
    if (context.query.keyword){

            const response = await searchRecipes(context.query.keyword.toString(),context.query.page)
            console.log(context.query)
            console.log(response)
            if (response.message == 'Not Found'){
                return {
                    props: {
                        recipeFound: false,
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