import ReactDOM from 'react-dom'
import Navbar from './Navbar'
import Left from './Left'
import Sidebar from './Sidebar'


function InstaApp(){
    return(
        <>
        <Navbar/>
        <div class="corpo">
        <Left/>
        <Sidebar/>
        </div>
       
         <div class="fundo-mobile">
         <ion-icon name="home"></ion-icon>
         <ion-icon name="search-outline"></ion-icon>
         <ion-icon name="add-circle-outline"></ion-icon>
         <ion-icon name="heart-outline"></ion-icon>
         <ion-icon name="person-outline"></ion-icon>
       </div>
       </>
    )
}

ReactDOM.render(<InstaApp/>,document.querySelector('.root'))

