import PostToJSX from './TransformToJSX-Post'

export default function Feed(){
    return(
        <div class="posts">
          {PostToJSX()}
      </div>
    )
}





