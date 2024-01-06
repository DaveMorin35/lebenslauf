import { Link } from "react-router-dom";

export default function Footer () {

    return (
        <>
        <footer className="bg-[#1F1F1F] flex w-full justify-center">
        <p className="text-white">© 2024 copyright all right reserved</p>
       <Link><img src="linkedin.png"className="w-16"/></Link>
        </footer>
        </>
    )
}