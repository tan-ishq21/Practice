import Link from 'next/link'
import React, { Suspense } from 'react'
import classes from './page.module.css'
import MealsGrid from '@/components/meals/meals-grid'
import { getMeals } from '@/lib/meals'

async function Meals(){
  const meals = await getMeals();

  return <MealsGrid meals={meals}/>
}
function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>Delicious meals created,{' '} <span className={classes.highlight}>by you</span></h1>
        <p>Choose your favorite recipe and see it yourself</p>
        <p className={classes.cta}>
          <Link href='/meals/share' >
            Want to share.
          </Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetching Meals!!</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  )
}

export default MealsPage
