// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here

const fruits = [
    {name: 'orange', color: 'orange', pricePerKg: "60"},
    {name: 'mango', color: 'yellow', pricePerKg: "100"},
    {name: 'apple', color: 'red', pricePerKg: "180"}]
    
    const fruitsmap = new Map();
    
    const buildmap = () => {
        for(let i=0;i<fruits.length;i+1){
            fruitsmap.set(fruits[i].name,fruits[i]);
        }
    }
    
    buildmap();
    console.log(fruitsmap.get('orange'));
    console.log(fruitsmap.get('mango'));
    console.log(fruitsmap.get('apple'));