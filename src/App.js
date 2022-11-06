import DanhSachQuanCuoc from "./components/DanhSachQuanCuoc";
import DanhSachXucXac from "./components/DanhSachXucXac";
import DiemCuoc from "./components/DiemCuoc";
import "./GameBauCua.css";

function App() {
  return (
    <div id="game-bau-cua" className="container-fluid p-5">
      <DiemCuoc />
      <div className="row">
        <div className="col-8">
          <DanhSachQuanCuoc />
        </div>
        <div className="col-4">
          <DanhSachXucXac />
        </div>
      </div>
    </div>
  );
}

export default App;
