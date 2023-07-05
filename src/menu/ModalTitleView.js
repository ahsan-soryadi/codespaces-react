import '../App.css';

const ModalTitleView = (props) => {
    return (
        <div>
            <div className="modal-menu-wrapper">
                <div className="modal-menu-content">
                    <h5>{props.titleMenu}</h5>
                </div>
            </div>
        </div>
    )
}
 export default ModalTitleView;