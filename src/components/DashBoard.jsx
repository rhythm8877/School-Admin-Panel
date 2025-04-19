"use client"

import { useState } from "react"
import "../styles/Dashboard.css"
import ProjectForm from "./ProjectForm/ProjectForm"
import RegistrationForm from "./RegistrationForm/registrationform"
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