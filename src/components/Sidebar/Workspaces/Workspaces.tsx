import { workspaces } from "../../../data/workspaces.json";
import Workspace from "./Workspace/Workspace";

const Workspaces = () => {
  return (
    <div className="">
      {workspaces.map((workspace) => {
        return (
          <Workspace
            name={workspace.name}
            id={workspace.id}
            is_private={workspace.is_private}
            topic={workspace.topic}
            key={workspace.id}
          />
        );
      })}
    </div>
  );
};

export default Workspaces;
