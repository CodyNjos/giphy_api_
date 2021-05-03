import "./Footer.css"
function Footer () {
    return(
        <div className = "footer" >
            <a href="https://www.linkedin.com/in/njos/"> &copy; Cody Njos, {new Date().getFullYear()} </a>
        </div>
    )
}

export default Footer