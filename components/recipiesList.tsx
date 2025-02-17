import { FC } from "react";
import type { Recipe } from '../lib/recipe'
import { Col, Card, CardDeck} from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image'

type Props = {
    recipes: Recipe[];
};

export const RecipesList: FC<Props>= (props) => {
    const  {recipes} = props

    return (
        <ul style={{padding: '0'}}>
            <CardDeck>
            {recipes.map((recipe,index) => (
                <Col md={6} style={{padding: '0'}} key={index}>
                <Card key={index}>
                {recipe.image_url ? (
                                    <Link href={`recipes/${recipe.id}`}>
                                        <Image
                                            src={recipe.image_url}
                                            alt="Picture"
                                            width={800}
                                            height={500}
                                        />
                                    </Link>
                                    ) : (
                                    <Link href={`recipes/${recipe.id}`}>
                                        <Image
                                            src='https://1.bp.blogspot.com/-D2I7Z7-HLGU/Xlyf7OYUi8I/AAAAAAABXq4/jZ0035aDGiE5dP3WiYhlSqhhMgGy8p7zACNcBGAsYHQ/s1600/no_image_square.jpg'
                                            alt="Not Found Image"
                                            width={800}
                                            height={500}
                                        />
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