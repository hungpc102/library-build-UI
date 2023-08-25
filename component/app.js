import html from '../core.js'
import { connect } from '../store.js'

const connector = connect()

function App({cars}){
    return html`
    <ul>
        ${cars.map(car => `<li>${car}</li>`)}
        <button onclick="dispatch('Add','Porches')">Add car</button>
    </ul>
    `                       
}
export default connector(App)