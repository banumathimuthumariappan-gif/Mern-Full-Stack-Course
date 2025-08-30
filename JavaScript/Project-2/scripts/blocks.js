let globalVariable = "T'm global";
{
    let blockVariable = "I'm in a block";
    console.log(blockVariable);
    console.log(globalVariable);
}

{
    let outer = "outer";
    {
        let inner = "inner";
        console.log(outer);
        console.log(inner);
    }
    // console.log(inner); ERROR
}

// Console.log(blockVariable); ERROR

