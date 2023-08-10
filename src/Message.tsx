
function Message(){
    // JSX syntax

    const name = 'Gbenga';
    if(name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello React</h1>;
}

export default Message;