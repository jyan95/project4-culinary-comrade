import React from "react";
import RecipeMainCard from "../components/RecipeMainCard";


class KitchenShowMain extends React.Component {

  render(){
    return (
      <div className="ui container">
        <h1> Recipes </h1>
        {this.props.recipes.map(recipe => < RecipeMainCard recipe={recipe} />)}
      </div>
    )
  }
}

export default KitchenShowMain;
