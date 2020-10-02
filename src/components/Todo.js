import React, {Component} from 'react'
import './styleSheet.css'


class Todo extends Component{
  constructor(props){
    super(props)
    this.state ={
      text: '',
      dataStorage: []
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  //
  changeHandler(event){
    this.setState({
      text: event.target.value
    });
  }

	handleSubmit(event){
	    event.preventDefault();
	  
	    let submitted = this.state.text;
	    let dataStorage = this.state.dataStorage
	    dataStorage.push(submitted)
	    console.log(dataStorage)

	    this.setState({
	      text: ''
	    })
	}
          				           
	//removing text from array
	handleClick(event){
		const dataStorage = this.state.dataStorage
		console.log('clicked');
		console.log(dataStorage);
		const selectedElement = event.target;
		const elementValue = selectedElement.innerHTML;
		const elementIndex = dataStorage.indexOf(elementValue);
		dataStorage.splice(elementIndex, 1)
			console.log(dataStorage)

			this.setState({
				dataStorage:dataStorage
			})
	}

	

	render(){
		return(
			<React.Fragment>
				<div className='formed'>
					<form onSubmit={this.handleSubmit}>
						<input value={this.state.text} onChange={this.changeHandler} />
						<button	type="submit" onSubmit={this.handleSubmit}>submit</button>
					</form>
					{/*dasvsdvs*/}
					<h1>{
						//dsvdsbfbhh
							this.state.dataStorage.map((i, z) => 
								<li onClick={this.handleClick
							} key={z}> {i}</li>  
							) 
						}
					</h1>
				</div>
			</React.Fragment>
		)
	}
}

export default Todo