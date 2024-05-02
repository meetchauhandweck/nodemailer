import "./table2.scss";

const Table2 = () => {
  return (
    <div className="table" style={{ marginTop: "40px" }}>
      <div className="container">
        <div className="table_wrapper">
          <div className="table_wrapper_heading">
            <h2>Bi-Facial Rear Side Power Gain Output</h2>
          </div>
          <div className="table_wrapper_inner">
            <table>
              <tbody>
                <tr>
                  <td className="col1">Model</td>
                  <td>R325P</td>
                  <td>R330P</td>
                  <td>R335P</td>
                </tr>
                <tr>
                  <td className="col1">10% Module output</td>
                  <td>594</td>
                  <td>600</td>
                  <td>605</td>
                </tr>
                <tr>
                  <td className="col1">15% Module output</td>
                  <td>621</td>
                  <td>627</td>
                  <td>633</td>
                </tr>
                <tr>
                  <td className="col1">20% Module output</td>
                  <td>648</td>
                  <td>654</td>
                  <td>660</td>
                </tr>
                <tr>
                  <td className="col1">25% Module output</td>
                  <td>675</td>
                  <td>681</td>
                  <td>688</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Table2;
