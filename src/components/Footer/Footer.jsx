import "./Footer.css"
function Footer () {
    return(
        <div className = "footer" >
            <a href="https://www.linkedin.com/in/njos/" target="_blank" rel="noreferrer"> &copy; Cody Njos, {new Date().getFullYear()} </a>
        </div>
    )
}

export default Footer