import React from "react";
import { WorkspaceProps } from "./workspace.types";

const Workspace: React.FC<WorkspaceProps> = ({
  name,
  id,
  is_private,
  topic,
}) => {
  return (
    <li key={id} aria-description={topic}>
      <span>{name}</span>
      {/* TODO: add styles for private workspace */}
      {is_private && <span>🔒</span>}
    </li>
  );
};

export default Workspace;
