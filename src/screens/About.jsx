import React from 'react'
import Card from "../components/layout/Card"
import Card2 from "../components/reuseable/Card2"

function About() {
    return (
    <div>
        <h1 className="text-3xl mb-4 text-center">
        Reviews
        </h1>
        <Card2 />
        <Card />
        <Card />
        <Card />
    </div>
  )
}

export default About