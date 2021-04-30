import StoriesToJSX from './TransformToJSX'



export default function Stories(){
    return(
       <div class="stories">
        {/*<StoriesToJSX/>* -----funciona tb*/}
        {StoriesToJSX()}
        <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
       </div>

    )
}



