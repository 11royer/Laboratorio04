import './App.css'
/*import { List } from './componentes/List'
import { WapperList } from './componentes/WrapperList'

function App(){
  return(
  <>
    <WapperList>
      <List/>
    </WapperList>
  </>
  )
}*/

import { Button } from './componentes/Button'
function App() {

  const buttonText = "Count : "
  return (
    <>
      <h1>HOLA MUNDO</h1>
      <Button text={buttonText}/>
    </>
  )
}

export default App
