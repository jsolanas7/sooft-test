class Restaurant{
    listRestaurants = [];
    get(filterName){
        if(filterName){
            return this.listRestaurants.filter(x => x.kindOfRestaurant === filterName);
        }
        return this.listRestaurants;
    }

    put(restaurant){
        if(!this.listRestaurants.find(x => x.name === restaurant.name)){
            this.listRestaurants.push(restaurant);
            return true;
        }
        return false;
    }

};

module.exports = new Restaurant();