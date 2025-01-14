import MealHeader from "../components/meals/meal-header";
import styles from './page.module.css';
import MealsGrid from "../components/meals/meal-grid";
import { getMeals } from "../lib/meals";
import { Suspense } from 'react';
async function Meals(){
  const meals = await getMeals();
  return <MealsGrid meals ={meals}/>
}
export default function MealsPage() {
  return (
    <>
      <MealHeader />
      <main className={styles.main}>
      <Suspense fallback={<p className={styles.loading}>Fetching meals...</p>}>
        <Meals />
      </Suspense>
      </main>
    </>
  );
}