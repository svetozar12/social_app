import React from "react";
import { Box } from "@chakra-ui/react";
// components
import DashBoard from "../../components/dashboard/DashBoard";
import Sidebar from "../../components/Sidebar";
import DashboardUser from "../../components/dashboard/DashboardUser";
import DashboardBlogs from "../../components/dashboard/DashboardBlogs";
import Overlay from "../../components/Overlay";
import { Navigate } from "react-router-dom";

const Dashboard = ({ user }: { user: any }) => {
  if (!user) return <Navigate to="/login" />;
  const username = user.displayName;

  return (
    <>
      <DashBoard>
        <Box position="absolute" top="5rem" width="80%">
          <DashboardUser username={username} />
          <DashboardBlogs />
        </Box>
      </DashBoard>
    </>
  );
};

export default Dashboard;
