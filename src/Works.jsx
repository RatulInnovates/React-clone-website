import React from 'react'
import WorkCard from './WorkCard'


function Works() {
  return (
    <div className="workcards container mx-auto p-4">
        <div className="flex flex-wrap -mx-4">
          <WorkCard work={{ url: "https://wpriverthemes.com/bronx/wp-content/uploads/2024/05/work-1.png", title: "LIGHTRIC MOTORS", type: "Photography", year: "2024" }} />
          <WorkCard work={{ url: "https://wpriverthemes.com/bronx/wp-content/uploads/2024/05/work-2.png", title: "POSITIVE ENERGY", type: "Branding", year: "2023" }} />
          <WorkCard work={{ url: "https://wpriverthemes.com/bronx/wp-content/uploads/2024/05/work-3.png", title: "XIONG WALL", type: "Marketplace", year: "2023" }} />
          <WorkCard work={{ url: "https://wpriverthemes.com/bronx/wp-content/uploads/2024/05/work-4.png", title: "HIDEWAY", type: "Web Design", year: "2022" }} />
        </div>
    </div>
  )
}

export default Works