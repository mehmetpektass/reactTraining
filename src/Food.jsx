function Food(){
const firstFood = "Banana";
const secondFood = "Watermelon";

    return(
        <ul>
            <li>Apple</li>
            <li>{firstFood}</li>
            <li>{secondFood.toUpperCase()}</li>
        </ul>
    );
}
export default Food