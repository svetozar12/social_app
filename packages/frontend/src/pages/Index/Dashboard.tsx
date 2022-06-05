import React from "react";
import { Box } from "@chakra-ui/react";
// components
import DashBoard from "../../components/dashboard/DashBoard";
import DashboardUser from "../../components/dashboard/DashboardUser";
import DashboardBlogs from "../../components/dashboard/DashboardBlogs";
import { Navigate } from "react-router-dom";

const Dashboard = ({ user }: { user: any }) => {
  console.log(user);
  if (!user) return <Navigate to="/login" />;

  return (
    <>
      <DashBoard>
        <Box position="absolute" top="5rem" width="80%">
          <DashboardUser />
          <DashboardBlogs />
        </Box>
      </DashBoard>
    </>
  );
};

export default Dashboard;
