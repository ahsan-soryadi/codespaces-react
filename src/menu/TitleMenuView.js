import '../App.css';

const TitleMenuView = (props) => {
    return (
        <div>
            <div className="title-menu-wrapper">
                <div className="title-menu-content">
                    <h5>{props.titleMenu}</h5>
                </div>
            </div>
        </div>
    )
}
 export default TitleMenuView;