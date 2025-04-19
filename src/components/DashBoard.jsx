"use client"

import { useState } from "react"
import "../styles/Dashboard.css"
import Cumulative1 from "./Cumulative1"
import ProjectForm from "./ProjectForm/ProjectForm"
import RegistrationForm from "./RegistrationForm/Registrationform"
import SchoolAdminPanel from "./SchoolTable"
import Sidebar from "./Sidebar"

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("School Details")

  const renderSection = () => {
    switch (activeSection) {
      case "School Details":
        return <SchoolAdminPanel />
      case "Registration Form":
        return <RegistrationForm />
      case "Project Form":
        return <ProjectForm />
      case "Cumulative1":
        return <Cumulative1 />
      default:
        return <SchoolAdminPanel />
    }
  }

  return (
    <div className="dashboard-grid">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main className="main-content">
        {renderSection()}
      </main>
    </div>
  )
}

export default Dashboard