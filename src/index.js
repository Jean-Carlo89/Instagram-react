import ReactDOM from 'react-dom'
import Navbar from './Navbar'
import Left from './Left'


function InstaApp(){
    return(
        <>
        <Navbar/>
        <Left/>
        </>
    )
}

ReactDOM.render(<InstaApp/>,document.querySelector('.root'))

