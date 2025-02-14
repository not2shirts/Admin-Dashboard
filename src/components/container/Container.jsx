import { Outlet } from "react-router";
import { Header, Sidebar } from "../index";

const Container = () => {
    return (
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 ml-64">

            <Header />


          <div className="mt-16 p-4 overflow-hidden">
            <Outlet />
          </div>


        </div>
      </div>
    )
  }



export default Container;
