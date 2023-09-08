import loading from '../../Assets/spinner.svg'
import { Container } from "./style";

export default function Load(){
    return (
        <Container>
            <img src={loading} alt="Carregando" width={100}/>
        </Container>
    )
}