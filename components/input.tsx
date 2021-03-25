import {Button, FormControl, InputGroup} from 'react-bootstrap';
import { useRouter } from 'next/router';
import { FC } from "react";

export const Input: FC = () => {

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
        )
    }