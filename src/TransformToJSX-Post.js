/*--------------------Posts to JSX --------------------*/

export default function PostToJSX(){

    const post = [{imageTop:<img src="assets/img/meowed.svg"/>,
              user:'meowed',
              imageMain:<img src="assets/img/gato-telefone.svg"/>,
              imageLikes:<img src="assets/img/respondeai.svg" />,
              textLikes:'respondeai',
              numberLikes:101.523},
              
              {imageTop:<img src="assets/img/barked.svg" />,
              user:'barked',
              imageMain:<img src="assets/img/dog.svg" />,
              imageLikes:<img src="assets/img/adorable_animals.svg" />,
              textLikes:'adorable_animals',
              numberLikes:99.159}
            ]


const postJSX = post.map((item) => {
  return(
    <div class="post">
    <div class="topo">
      <div class="usuario">
        {item.imageTop}
        {item.user}
      </div>
      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>

    <div class="conteudo">
    {item.imageMain}
    </div>

    <div class="fundo">
      <div class="acoes">
        <div>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
      </div>

      <div class="curtidas">
      {item.imageLikes}
        <div class="texto">
          Curtido por <strong>{item.textLikes}</strong> e <strong>outras {item.numberLikes} pessoas</strong>
        </div>
      </div>
    </div>
  </div>
  )
})

return postJSX
}



/* <div class="post">
          <div class="topo">
            <div class="usuario">
              <img src="assets/img/meowed.svg" />
              meowed
            </div>
            <div class="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>

          <div class="conteudo">
            <img src="assets/img/gato-telefone.svg" />
          </div>

          <div class="fundo">
            <div class="acoes">
              <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
            </div>

            <div class="curtidas">
              <img src="assets/img/respondeai.svg" />
              <div class="texto">
                Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
              </div>
            </div>
          </div>
        </div>





        <div class="post">
          <div class="topo">
            <div class="usuario">
              <img src="assets/img/barked.svg" />
              barked
            </div>
            <div class="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>

          <div class="conteudo">
            <img src="assets/img/dog.svg" />
          </div>

          <div class="fundo">
            <div class="acoes">
              <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
            </div>

            <div class="curtidas">
              <img src="assets/img/adorable_animals.svg" />
              <div class="texto">
                Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
              </div>
            </div>
          </div>
        </div>*/