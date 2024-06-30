import React from 'react'
import classes from './meals-grid.module.css'
import MealItem from './meals-item'
const MealsGrid = ({meals}) => {
  return (
    <div>
      <ul className={classes.meals}>
        {meals.map(meal => <li key={meal.id}>
            <MealItem {...meal}/>
        </li>)}
      </ul>
    </div>
  )
}

export default MealsGrid
