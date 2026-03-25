const Navbar = () => {
    return (
        <>
            <nav className="flex p-6 items-center justify-between bg-emerald-950">
                <h2 className=" text-xl font-bold">NoobToPro</h2>
                <div className="flex gap-4">
                    <h4>Home</h4>
                    <h4>About</h4>
                    <h4>Blog</h4>
                    <h4>Contact us</h4>
                </div>
            </nav>
        </>
    )
}

export default Navbar