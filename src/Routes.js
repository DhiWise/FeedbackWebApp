import React from "react";
import DesktopOne from "pages/DiscordThreads";
import DesktopTwo from "pages/CannyFeedbacks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DesktopOne />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/canny-feedbacks" element={<DesktopTwo />} />
        <Route path="/discord-threads" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
