import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa"
import React from 'react-icons/fa'

function RepoItem({repo}) {
    const {
        name,
        description,
        html_url,
        forks,
        open_issues,
        watchers_count,
        stargazers_count,
    } = repo

  return (
    <div className="mb-2 rounded-md card bg-gray-300
     hover:bg-gray-400">
     <div className="card-body">
        <h3 className="mb-2 text-xl font-semibold">
            <a href={html_url}>
                <FaLink className="inline mr-1"/> {name}
            </a>
        </h3>
        <p className="mb-3">{description}</p>
         <div>
            <div className="mr-2 badge badge-info badge-lg">
                <FaEye className="m2-2"/> {watchers_count}
            </div>
            <div className="mr-2 badge badge-success badge-lg">
                <FaStar className="m2-2"/> {stargazers_count}
            </div>
            <div className="mr-2 badge badge-error badge-lg">
                <FaInfo className="m2-2"/> {open_issues}
            </div>
            <div className="mr-2 badge badge-warning badge-lg">
                <FaUtensils className="m2-2"/> {forks}
            </div>
         </div>
       </div>
     </div>
  )
}

export default RepoItem