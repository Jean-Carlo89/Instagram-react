import SugestionToJSX from './TransformToJSX-Sugestion'
export default function Sidebar(){

return(

<div class="sidebar">
    <SidebarUser user='catanacomics' 
    image='assets/img/catanacomics.svg'
    description='Catana'
    />

    <div class="sugestoes">
    <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
    </div>

    <SugestionToJSX/>
    </div>

    <div class="links">
    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
    </div>

    <div class="copyright">
    © 2021 INSTAGRAM DO FACEBOOK
    </div>
</div>

)}


function SidebarUser(props){
    return(
    <div class='usuario'>
        <img src={props.image} />
        <div class="texto">
            <strong>{props.user}</strong>
            {props.description}
        </div>
    </div>
    )
}


