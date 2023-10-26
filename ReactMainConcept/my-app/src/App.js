import './App.css'
import Calculator from './Caculator/Caculator'

import Clock from './Clock'
import Composition from './Composition & Inheritance/Composition'
import Inheritance from './Composition & Inheritance/Inheritance'
import DemoLifeCycle from './DemoLifeCycleComponent'
import LoginControl from './LoginControl'
import ProductList from './ProductList/ProductList'
import BasicControlledComponent from './Xử lý Form/ControlledComponent'
import ControlledExample from './Xử lý Form/ControlledComponent'
import BasicUncontrolInput, { FileInput } from './Xử lý Form/UnControlledComponent'
import HandleMultipleInput from './Xử lý Form/Xử lý nhiều input'

function App() {
    return (
        <div className="App">
            {/* <DemoLifeCycle /> */}
            {/* <Clock /> */}
            {/* <LoginControl /> */}
            {/* <ProductList /> */}
            {/* <BasicControlledComponent /> */}
            {/* <HandleMultipleInput /> */}
            {/* <BasicUncontrolInput /> */}
            {/* <FileInput /> */}
            {/* <Calculator /> */}
            {/* <Inheritance /> */}
            <Composition />
        </div>
    )
}

export default App
