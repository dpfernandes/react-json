import React, {Component} from "react";
import Card from '../src/components/Card/Card';

//data for post
import data from "./data.json";



export default class DefaultPost extends Component {
	render() {
    console.log(data);
    
		return (
			<>
        <div class='card-game' style={{"display": "flex"}}>{data.map((postData) => {

          return (
            <div class='card-game' key={postData.id}>
                  {/* {postData.title} */}
                  <Card image={require('../src/assets/images/'+ postData.img_url)} >
                   {/* <img src={require('../src/assets/images/'+ postData.img_url)} alt="blae"/>  */}
                   </Card>

            </div>
          );
        })}
       </div>
			</>
		);
	}
}
