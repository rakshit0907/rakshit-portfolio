import Grid from "./Grid";
import Frames from "./Frames";
import Nodes from "./Nodes";
import Connections from "./Connections";

export default function Workspace() {
  return (
    <>
      <Grid />
      <Frames />
      <Nodes />
      <Connections />
    </>
  );
}