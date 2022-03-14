import spinner from "./assets/spinner.gif"

function Spinner() {
  return (
    <div className="w0100 mt-20">
        <img className="text-center mx-auto" width={180} src={spinner} alt="Loading..." />
    </div>
  )
}

export default Spinner