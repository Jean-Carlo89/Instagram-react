import StoriesToJSX from './TransformToJSX'



export default function Stories(){
    return(
       <div class="stories">
        {StoriesToJSX()}
        <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
       </div>

    )
}





/* tentativa 1 incompeleta

function Story(){
    <div class="story">
              <div class="imagem">
                stories.
              </div>
             
              <div class="usuario">
                9gag
              </div>
    </div>
}                

*/

