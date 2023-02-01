## //VARIABLES

-genderVar(gender)
-ageVar(age)
-heightVar(height)
-weightVar(weight)
-BMR(basal metabolic rate)
-cutVarCals(BMR - 500)
-maintainVarCals(BMR)
-bulkVarCals(BMR + 500)
-calories(calories to consume)
-fatsVar(fats in grams)
-fatsCals(calories from fats)
-proteinVar(protein in grams)
-proteinCals(calories from protein)
-carbsVar(carbs in grams)

## // INPUTS FROM USER

-user input gender (stored as genderVar)
-user input age (stored as variable ageVar)
-user input height (stored as heightVar)
-user input weight (stored as weight var)

## //BMR LOGIC

-change weightVar from lbs to kgs
-change heightVar from feet/in to cm
-if male - BMR = 66.47 + (13.75 _ wightVar) + (5.003 _ heightVar) - (6.755 \* ageVar)
-if female - BMR = 655.1 + (9.563 x weightVar) + (1.850 x heightVar) - (4.676 x ageVar)

## //CALORIE LOGIC

-store 3 separate algos as variables to apply to the user input BMR variable (cut, maintain, bulk)
-cutVarCals = BMR - 500
-maintainVarCals = BMR
-bulkVarCals = BMR + 500

-store selected option and results as selectedCalVar

## //MACRO LOGIC

-fatsCal = selectedCalVar _ .3
-fatsVar = fatsCal _ 9
-proteinVar = weightVar _ 1
-proteinCal = proteinVar _ 4
-carbsVar = selectedCalVar - fatsCal - proteinCal \* 4

## //RESULTS DISPLAY LOGIC

-Results text ('RESULTS')
-'Calories = selectedCalVar'
-'Fat = fatsVar'
-'Protein = proteinVar'
-'Carbs = carbsVar'
