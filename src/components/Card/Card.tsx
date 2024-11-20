import * as S from './style'
import img1 from '../../assets/images/robo.png'

export const Card: React.FC = ()=>{
    return(
        <S.Container>
           <S.img src={img1} alt="er" />
           <S.divInfo>
                <S.name>Giliard H. da Silva</S.name>
                <S.address>Ipojuca, Pernambuco</S.address>
                <S.presentation>"Front-end developer"</S.presentation>
           </S.divInfo>
           <S.divLinks>
                <S.a href="https://github.com/Giliard-Silva248" target='_blank' rel='noreferrer'>GitHub</S.a>
                <S.a href="https://www.linkedin.com/in/giliard-h-da-silva-72a331169/" target='_blank' rel='noreferrer'>LinkedIn</S.a>
                <S.a href="https://www.instagram.com/giliard.hs/" target='_blank' rel='noreferrer'>Instagram</S.a>
                <S.a href="mailto:ghssilva248@gmail.com" target='_blank' rel='noreferrer'>Email</S.a>
                <S.a href="https://giliardsilva.netlify.app/" target='_blank' rel='noreferrer'>LANDING PAGE / Orçamento</S.a>
           </S.divLinks>
        </S.Container>
    )
}