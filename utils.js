function generateRandomNumer()
{
    return Math.floor(Math.random()*100)+1;

}

function celsiusToFarenhite(celsius)
{
    return (celsius*9)/5+32;
}

//module.exports = generateRandomNumer;  //common js export method

// module.exports = {          //common js multiple exports
//     generateRandomNumer,
//     celsiusToFarenhite
// };

// export default generateRandomNumer; //es6 export single
export {
    generateRandomNumer,
    celsiusToFarenhite
};