import '../App.css';

const TitleMenuView = (props) => {
    return (
        <div>
            <div className="title-menu-wrapper">
                <div className="title-menu-content">
                    <h4>{props.titleMenu}</h4>
                </div>
            </div>
        </div>
    )
}
 export default TitleMenuView;