import { Card, Container, Button } from 'react-bootstrap'
import { ListQuestionnaires } from './components/ListQuestionnaires';
import {useNavigate} from "react-router-dom";
export const ShowQuestionnaires = () => {
    const user = JSON.parse(localStorage.user);
    const navigate = useNavigate();
    return (
        <Container>
            <Card>
                <Card.Body>
                    <h3><b>Bienvenido de nuevo, {user.name}</b></h3>
                    <Card.Title>{user.rol == "administrator" ? "Cuestionarios creados" : "Tus cuestionarios"}</Card.Title>
                    <Card.Text><b>Formularios recientes:</b></Card.Text>
                    {
                        user.rol == "client" && (
                            <Button onClick={() =>navigate("/create-questionnaire")}>Crear cuestionario</Button>
                        )
                    }
                    <ListQuestionnaires rol={user.rol} />
                </Card.Body>
            </Card>
        </Container>
    )
}
