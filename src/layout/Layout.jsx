import AddToDo from "../components/AddToDo";
import Logout from "../components/Logout";
import Menu from "../components/Menu";
import User from "../components/User";
function Layout({children}) {
    return (
        <div className="flex w-screen h-screen">
            <div className="w-[280px] border flex flex-col">{/*Left Navbar*/}
                <div className="flex h-24 border"><User/></div>
                <div className="flex-1"><Menu/></div>
                <div className="flex h-24 border"><Logout/></div>
            </div>
            
            <div className="flex-1">{/*Right side of the layout*/}
                <div className="flex flex-col">
                    <div className="flex h-24 justify-center items-center border gap-2">
                        <AddToDo/>
                    </div>
                    <div className="flex-1">{children}</div>
                </div>
            </div>   
        </div>
    );
}
export default Layout;
