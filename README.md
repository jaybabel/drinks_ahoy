# Project3


WireFrame Links:

Index page: https://wireframe.cc/4acTyV

Search Results: https://wireframe.cc/vuOlKz

Drinks Alphabetically: https://wireframe.cc/2odmG9

Drinks by Ingredient: https://wireframe.cc/IMoRu3

# APIs
We used four different APis from https://www.thecocktaildb.com/ -

For search by letter we used:

https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${this.state.searchLetter

Random search requests go to:

https://www.thecocktaildb.com/api/json/v1/1/random.php

To search by ingredient we use:

https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list

We also had to use this API to search for drinks by ID number:

https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.props.match.params.id


# User Stories:

I am a consumer, I want to see random drinks, So I can get new ideas.

I am a consumer, I want to search by drink name, So I can get the recipe for the drink.

I am a consumer, I want to search by ingredients, So I can see what drinks are made using that ingredient.

I am a consumer, I want to look at drinks by alphabetical listing, So that I can find a drink that starts with a specific letter or letters.

I am a consumer, I want to know what site I am on, So I can use it again.

## Libraries used by this

react-router

react-router-dom

axios

Bootswatch
