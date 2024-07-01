import React from 'react'
import classes from "./loading.module.css"
const MealsLoading = () => {
  return (
    <div>
      <p className={classes.loading}>Fetching Meals!!</p>
    </div>
  )
}

export default MealsLoading
