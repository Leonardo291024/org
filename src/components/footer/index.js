import "./footer.css"

const Footer = () => {
    return <footer className="footer" style={{backgroundImage: "url(./img/footer-backgraound.png)"}}>
        <div className="redes">
            <a href="">
                <img src="/img/facebook_logo.png" alt="facebook"/>
            </a>
            <a href="">
                <img src="/img/twitter_logo.png" alt="Twiter"/>
            </a>
            <a href="">
                <img src="/img/instagram_logo.png" alt="Instagram"/>
            </a>
        </div>
        <img src="/img/Logo_footer.png" alt="org"/>
        <strong>Desarrollado por Leonardo Diaz</strong>
    </footer>
}

export default Footer