const socialText = {
    fontFamily: 'Raleway',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "130%",
    color: "#353A5A",
    padding: "27px 0 47px 0"
};

const linkText = {
    fontFamily: 'Raleway',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "100%",
    color: "#353A5A",
    paddingTop: "20px"
};

const mainLinkText = {
    fontFamily: 'Raleway',
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "100%",
    color: "#353A5A",
    paddingBottom: "11px"
}

function Footer() {
    return (
        <footer className="footer" style={{ borderTop: "1px solid rgba(53, 58, 90, .1)", paddingTop: "80px" }}>
            <div className="footer__container" style={{ display: "flex", flexWrap: "wrap", }}>
                <div className="footer__social-content" style={{ display: "flex", flexDirection: "column", width: "25%", paddingBottom: "50px"}}>
                    <div className="footer__logo">
                        <img src="./img/logotype2.svg" alt="Лого платформы" />
                    </div>
                    <p className="social-text" style={socialText}>Образовательная онлайн-платформа для развития и тренировки навыков в сфере информационных технологий</p>
                    <div className="social-link">
                        <a href="#" style={{marginRight: "25px"}}><img src="./img/icon/facebookFooter.svg" alt="" title="Фейсбук" /></a>
                        <a href="https://vk.com/rivix" style={{marginRight: "25px"}}><img src="./img/icon/vkFooter.svg" alt="" title="Вконтакте" target="_blank" /></a>
                        <a href="#"><img src="./img/icon/instagramFooter.svg" alt="" title="Инстаграм" /></a>
                    </div>
                </div>
                <div className="footer__links-content" style={{ display: "flex", width: "75%"}}>
                    <div className="links__box" style={{ margin: "0 111px 0 100px" }}>
                        <ul>
                            <li className="footer-link" style={mainLinkText}>Обучение</li>
                            <a href="#"><li className="footer-link" style={linkText}>Курсы</li></a>
                            <a href="#"><li className="footer-link" style={linkText}>Вебинары</li></a>
                            <a href="#"><li className="footer-link" style={linkText}>Тренажеры</li></a>
                            <a href="#"><li className="footer-link" style={linkText}>Воркшопы</li></a>
                        </ul>
                    </div>
                    <div className="links__box" style={{ marginRight: "79px" }}>
                        <ul>
                            <li className="footer-link" style={mainLinkText}>О нас</li>
                            <a href="#"><li className="footer-link" style={linkText}>О платформе</li></a>
                            <a href="#"><li className="footer-link" style={linkText}>Преподаватели</li></a>
                            <a href="#"><li className="footer-link" style={linkText}>Тарифы</li></a>
                            <a href="#"><li className="footer-link" style={linkText}>Отзывы</li></a>
                        </ul>
                    </div>
                    <div className="links__box" style={{ marginRight: "68px" }}>
                        <ul>
                            <li className="footer-link" style={mainLinkText}>Контакты</li>
                            <a href="#"><li className="footer-link" style={linkText}>Связаться с нами</li></a>
                            <a href="#"><li className="footer-link" style={linkText}>Консультация</li></a>
                            <a href="#"><li className="footer-link" style={linkText}>Реквизиты</li></a>
                            <a href="#"><li className="footer-link" style={linkText}>Поддержка</li></a>
                        </ul>
                    </div>
                    <div className="links__box">
                        <ul>
                            <li className="footer-link" style={mainLinkText}>Возникли вопросы?</li>
                            <a href="#"><li className="footer-link" style={linkText}>Напишите нам на почту <br/> <span style={{textDecorationLine: "underline", lineHeight: "130%"}}>education@ementor.info</span></li></a>
                        </ul>
                    </div>
                </div>
                <div className="footer__row" style={{ width: "100%", height: "74px",  borderTop: "1px solid rgba(53, 58, 90, .1)", display: "flex", justifyContent: "space-between"}}>
                    <div className="footer__copyright" style={{display: "flex", alignItems: "center", height: "100%", }}>
                        <p className="copyright-text">E-Mentor © 2021 Все права защищены</p>
                    </div>
                    <div className="footer__offer" style={{display: "flex", alignItems: "center", height: "100%", }}>
                        <a href="#" style={{color: "#353A5A"}}>Политика обработки персональных данных</a>
                        <a href="#" style={{marginLeft: "30px", color: "#353A5A"}}>Публичная оферта</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;