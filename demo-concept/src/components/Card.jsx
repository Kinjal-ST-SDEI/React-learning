const Card = (props) => {
    console.log(props)
    return (
        <>
            <div className="font-bold bg-white text-black p-8 text-center inline-block rounded m-4">
                <h1>Name:{props.user}</h1>
                <img className="rounded-full ml-4" src={props.img} alt=""/>
                <h2>Location:{props.location}</h2>
                <h2>Phone:{props.phone}</h2>
            </div>
        </>
    )
}

export default Card