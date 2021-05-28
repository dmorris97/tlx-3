import React, {useState} from 'react'
import SIButton from '../components/sign-in/SIButton'
import AdminLE from '../components/pages/admin/AdminLE'
import AdminPW from '../components/pages/admin/AdminPW'
import AdminDITL from '../components/pages/admin/AdminDITL'
import WithAdminAuth from '../components/auth/hoc/withAdminAuth'

const Admin = () => {
    const [showResultsLE, setShowResultsLE] = useState(false)
    const onClickLE = () => setShowResultsLE(!showResultsLE)
    const [showResultsPW, setShowResutsPW] = useState(false)
    const onClickPW = () => setShowResutsPW(!showResultsPW)
    const [showResultsDITL, setShowResultsDITL] = useState(false)
    const onClickDITL = () => setShowResultsDITL(!showResultsDITL)
    return (
        <div>
            <WithAdminAuth>
                <AdminLayout>
                    <h1 className='admin-h1'>
                        Welcome to the Admin Control Area
                    </h1>
                    <h3 className='admin-h3'>
                        (Aka the David-Doesn't-Wanna-Do-It Area)
                    </h3>
                    <br></br>
                    <div>
                        <SIButton type="submit" onClick={onClickLE}>
                            Live Event
                        </SIButton>
                            <br></br>
                            {showResultsLE ? <AdminLE/> : null}
                    </div>
                    <div>
                        <SIButton type="submit" onClick={onClickPW}>
                            Past Work
                        </SIButton>
                            <br></br>
                            {showResultsPW ? <AdminPW/> : null}
                    </div>
                    <div>
                        <SIButton type="submit" onClick={onClickDITL}>
                            Day In The Life
                        </SIButton>
                            <br></br>
                            {showResultsDITL ? <AdminDITL/> : null}
                    </div>
                </AdminLayout>
            </WithAdminAuth>
        </div>
    )
}

export default Admin