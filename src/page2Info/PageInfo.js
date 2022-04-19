function PageInfo(props) {
    return (
        <section className="page2Info">
            <div className="page2Info__container">
                <div className="sectionBest__row">
                        <div className="row__count">
                            <h2 className="count-title">{props.well}</h2>
                            <p className="count-text"> недель интенсивного обучения, <br/> занятия 3 раза в неделю</p>
                        </div>
                        <div className="row__count">
                            <h2 className="count-title">{props.material}</h2>
                            <p className="count-text">урока и домашних заданий <br/> с проверкой от тренера</p>
                        </div>
                        <div className="row__count">
                            <h2 className="count-title">{props.profession}</h2>
                            <p className="count-text">работ в портфолио по окончании курса, <br/> 6 шотов и 1 итоговая работа</p>
                        </div>
                        <div className="row__count">
                            <h2 className="count-title">{props.members}</h2>
                            <p className="count-text">студента в каждой группе, у каждой <br/> группы свой куратор</p>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default PageInfo;