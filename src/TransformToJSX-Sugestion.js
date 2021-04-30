export default function SugestionToJSX(){
    const sugestions = [{image:<img src="assets/img/bad.vibes.memes.svg" />,
                        name:'bad.vibes.memes',
                        reason:'Segue você'},
                        {image: <img src="assets/img/chibirdart.svg" />,
                        name:'chibirdart',
                        reason:'Segue você'},
                        {image: <img src="assets/img/razoesparaacreditar.svg" />,
                        name:'razoesparaacreditar',
                        reason:'Novo no Instagram'},
                        {image: <img src="assets/img/adorable_animals.svg" />,
                        name:'adorable_animals',
                        reason:'Segue você'},
                        {image: <img src="assets/img/smallcutecats.svg" />,
                        name:'smallcutecats',
                        reason:'Segue você'}
                        ]


    const sugestionsJSX = sugestions.map((item)=>{

        return(
    <div class="sugestao">
            <div class="usuario">
            {item.image}
            <div class="texto">
                <div class="nome">{item.name}</div>
                <div class="razao">{item.reason}</div>
            </div>
            </div>

            <div class="seguir">Seguir</div>
    </div>
        )
    })

    return sugestionsJSX
}