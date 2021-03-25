import { FC } from "react";
import type { Recipe } from '../lib/recipe'
import { Row, Col, Card, CardDeck} from 'react-bootstrap';
import Link from 'next/link';

type Props = {
    recipes: Recipe[];
};

export const RecipesList: FC<Props>= (props) => {
    const  {recipes} = props
    return (
        <ul style={{padding: '0'}}>
            <CardDeck>
            {recipes.map((recipe,index) => (
                <Col md={6} style={{padding: '0'}}>
                <Card key={index}>
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
            ))}
            </CardDeck>
            </ul>
    )

}