import TitleMenuView from '../TitleMenuView';

const WerehouseDeliveryList = () => {
    return (
        <div>
            <TitleMenuView titleMenu="LIST PENGIRIMAN AG"/>
            <div className='main-content-wrapper'>
                <div className='main-content'>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>John</td>
                                <td>Doe</td>
                                <td>john@example.com</td>
                            </tr>
                            <tr>
                                <td>Mary</td>
                                <td>Moe</td>
                                <td>mary@example.com</td>
                            </tr>
                            <tr>
                                <td>July</td>
                                <td>Dooley</td>
                                <td>july@example.com</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default WerehouseDeliveryList;