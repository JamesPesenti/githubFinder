import { FaGithubAlt } from "react-icons/fa"

function Footer() {
    const footerYear = new Date().getFullYear()

  return (
    <footer className="footer p-10 bg-gray-200 text-primary-content footer-center">
        <div>
        <FaGithubAlt className="inline pr-1 text-3xl" />
        <p className="text-beige">Copyright &copy; {footerYear} </p>
        </div>
    </footer>
  )
}

export default Footer



