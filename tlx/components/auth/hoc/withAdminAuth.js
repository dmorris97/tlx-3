import {useAdminAuth} from '../customHooks/exporter'

const WithAdminAuth = props => useAdminAuth(props) && props.children

export default WithAdminAuth