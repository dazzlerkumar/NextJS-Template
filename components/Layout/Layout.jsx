import style from "./Layout.module.css";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import LocalStorageService from "@services/LocalStorageHandler";

//components
import LoadingScreen from "../Elements/LoadingScreen";
import Header from "../Common/Header/Header";

//Contexts
import { GlobalContext } from "@contexts/GlobalData";
import { ManagedUI } from "@contexts/ManagedUI";
import Modal from "../Common/Modal";

function Layout({ children }) {
    const localStorage = LocalStorageService.getService();
    const router = useRouter();
    const { setIsAuth } = useContext(GlobalContext);
    const [isLoading, setLoading] = useState(true);
    const [showSidebar, setShowSidebar] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [modalComp, setModalComp] = useState(null);
    let rootPath = router.pathname.split("/")[1];
    useEffect(() => {
        const token = localStorage.getAccessToken();
        if (token == null) {
            /*  if (router.pathname === "/login") {
                setLoading(false);
            } else {
                router.push({
                    pathname: "/login",
                });
            } */
            setLoading(false);
        } else {
            setIsAuth({
                token: token,
            });
            setLoading(false);
        }
    }, [router]);

    if (isLoading) {
        return <LoadingScreen />;
    }
    return (
        <div
            className={` ${rootPath !== "login" ? style.root : style.unroot}`}
            /*  style={{ width: "100vw", height: "100vh" }} */
        >
            <ManagedUI.Provider
                value={{
                    openModal,
                    setOpenModal,
                    showSidebar,
                    setShowSidebar,
                    modalComp,
                    setModalComp,
                }}
            >
                {openModal && (
                    <Modal setShowModal={() => {}}>{modalComp}</Modal>
                )}
                {/*  {localStorage.getAccessToken() != null && <Header />} */}
                {rootPath !== "login" && <Header />}
                <div className="container">{children}</div>
            </ManagedUI.Provider>
            {/* Toast Container */}
            {/*      <ToastContainer position="bottom-left" theme="dark" /> */}
        </div>
    );
}

export default Layout;
