import './App.css'

import Clock from './Clock'
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
            <FileInput />
        </div>
    )
}

export default App
