import React from 'react'
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
  myInput = React.createRef()
  goToStore = (event) => {
    event.preventDefault()
    console.log(this.myInput)

  }
  render() {
    return (
      <>
        {/* comment */}
        <form action="" className="store-selector" onSubmit={this.goToStore}>
          <h2>Please Enter A Store</h2>
          <input
            type="text"
            ref={this.myInput}
            required
            placeholder="Store Name"
            defaultValue={getFunName()} />
        </form>
      </>
    );}
}

export { StorePicker }