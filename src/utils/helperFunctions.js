export const randomNumber = () =>{
    const min = 100; // half of 200
    const max = 350; // half of 700
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const evenNumber = randomNumber * 2;

    return evenNumber
}

export const test = "test"