


import dashboardLogo from '../../assets/dashboard.png';

function Header() {
    return (
        <div className=" flex fixed top-0 left-64 right-0 z-50 bg-white shadow-sm justify-end">
            <img src={dashboardLogo} alt="Logo" style={{ width: "50px", height: "50px", margin: "24px", }} />
            <p className=' font-medium text-4xl my-7'>E-Commerce Dashboard</p>
        </div>
    );
}

export default Header;
